import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Alert} from 'react-native';
import params from './src/params'
import MineField from './src/components/MineField'
import { 
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed
} from './src/functions'
import Header from './src/components/Header'
import LevelSelection from './src/screens/LevelSelection'

const minesAmount = () => {
  const cols = params.getColumnsAmount()
  const rows = params.getRowsAmount()
  return Math.ceil(cols * rows * params.difficultLevel)
}

const createState = () => {
  const cols = params.getColumnsAmount()
  const rows = params.getRowsAmount()
  const won = false
  const lost = false
  const showLevelSelection = false
  return {
    board: createMinedBoard(rows, cols, minesAmount()),
    showLevelSelection
  }
}
const initialState = createState()


export default function App() {
  
  const [state, setState] = useState(initialState)

  onOpenField = (row, column) =>{
    const board = cloneBoard(state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)
  
    if (lost) {
      showMines(board)
      Alert.alert('Perdeu!', 'Que burro!')
    }
  
    if (won) {
      Alert.alert('Parabéns!!!', 'Você venceu!')
    }
  
    setState({...state, board, lost, won})
  }


  onSelectField = (row, column) => {
    const board = cloneBoard(state.board)
    invertFlag(board, row, column)
    const won = wonGame(board)
    if (won) {
      Alert.alert('Parabéns!!!', 'Você venceu!')
    }
    setState({...state, board})
  }

  onLevelSelected = (level) => {
    params.difficultLevel = level
    setState(createState())
  }

  return (
    <View style={styles.container}>
      <LevelSelection isVisible={state.showLevelSelection}
        onLevelSelected={onLevelSelected}
        onCancel={() => setState({...state, showLevelSelection: false})}
      />
      <Header flagsLeft={minesAmount() - flagsUsed(state.board)} 
          onNewGame={() => setState(createState)}
          onFlagPress={() => setState({...state, showLevelSelection: true})}
      />
      <StatusBar style="auto" />
      <View style={styles.board}>
        <MineField board={state.board} onOpenField={onOpenField} onSelectField={onSelectField} />
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
});
