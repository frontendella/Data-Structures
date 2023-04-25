// Snapshot Array is a data structure that supports three operations:

// set(index, val): updates the value of the element at the given index to val.
// snap(): takes a snapshot of the current state of the array and returns a snapshot id.
// get(index, snap_id): returns the value of the element at the given index at the time of the snapshot with the given snap_id.


class SnapshotArray {
    constructor(length) {
      this.arr = new Array(length).fill(0);
      this.snapshots = new Map();
      this.snap_id = 0;
    }
    
    set(index, val) {
      this.arr[index] = val;
    }
    
    snap() {
      this.snapshots.set(this.snap_id, this.arr.slice());
      return this.snap_id++;
    }
    
    get(index, snap_id) {
      if (this.snapshots.has(snap_id)) {
        return this.snapshots.get(snap_id)[index];
      }
      return this.arr[index];
    }
  }

//   The time complexity of set and get is O(1), and the time complexity of snap is O(n), where n is the length of the array. The space complexity is O(nm), where n is the length of the array and m is the number of snapshots taken.