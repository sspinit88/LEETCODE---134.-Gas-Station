/*
134. Gas Station

There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique


Example 1:

Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
Output: 3
Explanation:
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 4. Your tank = 4 - 1 + 5 = 8
Travel to station 0. Your tank = 8 - 2 + 1 = 7
Travel to station 1. Your tank = 7 - 3 + 2 = 6
Travel to station 2. Your tank = 6 - 4 + 3 = 5
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
Therefore, return 3 as the starting index.

Example 2:

Input: gas = [2,3,4], cost = [3,4,3]
Output: -1
Explanation:
You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
Let's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 0. Your tank = 4 - 3 + 2 = 3
Travel to station 1. Your tank = 3 - 3 + 3 = 3
You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.
Therefore, you can't travel around the circuit once no matter where you start.

 
Constraints:

    n == gas.length == cost.length
    1 <= n <= 105
    0 <= gas[i], cost[i] <= 104

*/

function canCompleteCircuit(gas, cost) {
  // Инициализация переменных
  // Initialize variables
  let totalTank = 0;
  let currTank = 0;
  let startingStation = 0;

  for (let i = 0; i < gas.length; i++) {
      // Обновление общего и текущего бака
      // Update total and current tank
      totalTank += gas[i] - cost[i];
      currTank += gas[i] - cost[i];

      // Если текущий бак становится отрицательным, сбросить текущий бак и установить стартовую станцию на следующую станцию
      // If the current tank becomes negative, reset the current tank and set the starting station to the next station
      if (currTank < 0) {
          startingStation = i + 1;
          currTank = 0;
      }
  }

  // Если общий бак отрицательный, вернуть -1, иначе вернуть стартовую станцию
  // If the total tank is negative, return -1, otherwise return the starting station
  return totalTank >= 0 ? startingStation : -1;
}

/*

This solution ensures that the algorithm runs in O(n) time complexity and uses O(1) space complexity.
The greedy approach guarantees that if there is a solution, it will find it. 
If there is no solution, it will return -1.

Это решение гарантирует, что алгоритм работает с временной сложностью O(n) и использует пространственную сложность O(1).
Жадный подход гарантирует, что если решение есть, то оно его найдет.
Если решения нет, возвращается -1.

*/
