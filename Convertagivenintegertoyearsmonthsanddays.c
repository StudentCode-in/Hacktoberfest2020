#include <stdio.h>
int main() {
	int ndays, y, m, d;	
	
	printf("Input no. of days: ");
	
	scanf("%d", &ndays);
	
	y = (int) ndays/365;
	
	ndays = ndays-(365*y);
		
	m = (int)ndays/30;
	
	d = (int)ndays-(m*30);
	
	printf(" %d Year(s) \n %d Month(s) \n %d Day(s)", y, m, d);
	return 0;
}
