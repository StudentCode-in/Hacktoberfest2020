#include <iostream>
using namespace std;


template <typename dt>                                              // Template applied.
class quickSort {
private:                                                            // Variables initialised.
    dt arr[10000];
    int size = 0;
    int mid;

public:
    void exchange(int m, int n) {                                   // Function to exchange values.
        dt temp = arr[m];
        arr[m] = arr[n];
        arr[n] = temp;
    }
    
    void sort() {                                                   // Function to initialise quick-sort.
        quick_sort(0,size-1);
    }

    void fillArray(int i, dt value) {                               // Function to get array from input.
        arr[i] = value;
        size++;
    }

    int partition(int l, int h) {                                   // Function for getting partition index.
        dt pivot = arr[l];
        int i=l, j=l+1;
        while(j<=h) {
            if(arr[j]<=pivot) {
                exchange(i+1, j);
                i=i+1;
            }
            j=j+1;
        }
        exchange(l,i);
        return i;
    }

    void quick_sort(int l, int h) {                                 // Function to apply quick-sort algorithm.
        if(h<=l)
            return;
        mid = partition(l,h);
        quick_sort(l, mid-1);
        quick_sort(mid+1, h);
    }

    void dispArray() {                                              // Function to display array.
        for(int i=0 ; i<size ; i++)
            cout << arr[i] << " ";
    }
};


int main() {
    quickSort<double> obj;
    int n;
    double temp;
    cin >> n;
    for(int i=0 ; i<n ; i++) {
        cin >> temp;
        obj.fillArray(i, temp);
    }
    obj.sort();
    obj.dispArray();
    return 0;
}
