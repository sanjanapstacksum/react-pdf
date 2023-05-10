import React from 'react';
import { StyleSheet, Text, View, Font } from '@react-pdf/renderer';

// Define styles for the table
const styles = StyleSheet.create({
  mainTable: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  headerRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    alignItems: 'center',
    height: 24,
    fontStyle: 'bold',
    fontSize: 12,
  },
  rowData: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
    height: 20,
    fontSize: 10,
  },
  cell: {
    flex: 1,
    textAlign: 'left',
    borderRightWidth: 1,
    borderRightColor: '#ccc',
    paddingLeft: 5,
  },
  lastCell: {
    flex: 1,
    textAlign: 'left',
    paddingLeft: 5,
  },
});

// Define the data for the table
const data = [
  { id: 1, name: 'Item 1', quantity: 10, option: 'Option 1' },
  { id: 2, name: 'Item 2', quantity: 20, option: 'Option 2' },
  { id: 3, name: 'Item 3', quantity: 30, option: 'Option 3' },
];

// Define the component that renders the table
const Table = () => {
  return (
    <View style={styles.mainTable}>
      {/* Render the header row */}
      <View style={styles.headerRow}>
        <Text style={[styles.cell]}>Item</Text>
        <Text style={[styles.cell]}>Quantity</Text>
        <Text style={[styles.lastCell]}>Option</Text>
      </View>
      {/* Render the data rows */}
      {data.map((item) => (
        <View style={styles.rowData} key={item.id}>
          <Text style={[styles.cell]}>{item.name}</Text>
          <Text style={[styles.cell]}>{item.quantity}</Text>
          <Text style={[styles.lastCell]}>{item.option}</Text>
        </View>
      ))}
    </View>
  );
};

export default Table;
