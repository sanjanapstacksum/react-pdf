import {
  Text,
  View,
  Document,
  Page,
  StyleSheet,
  Image,

} from "@react-pdf/renderer";
import React from "react";
import { statementData } from "./jsondata";


// Create styles
const styles = StyleSheet.create({
  body: {
    
  },
  page: {
    fontSize: 11,
    flexDirection: "column",
    margin: 25,
    paddingRight:25,
    
   
    marginTop:30,
    width: "100%",

  },

  image: {
    width: "64px",

    marginTop: "20px"
  },
  headerText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: "30px"

  },
  rightEle: {
    float: "right",
    position: "relative",
    marginLeft: "auto",
    fontSize: "9px",
  },
  heading2: {
    fontSize: "13px",
    marginTop: "3px",
  },


  storeName: {
    fontSize: "20px",
    fontFamily: "Helvetica-Bold",
    marginTop: "30px"

  },
  takeAway: {
    fontFamily: "Helvetica-Bold",
    width: "70%",
    fontSize: "12px"
  },
  customerDetail: {
    fontFamily: "Helvetica-Bold",
    fontSize: "12px"
  },
  row_take: {
    marginTop: "20px",
    flexDirection: "row",
    display: "flex",
    justifyContent: " space-between",
    width: "80%"
  },
  col1: {
    flexDirection: "column",

  },
  col2: {
    flexDirection: "column",
    alignSelf: "flex-end",
    marginLeft: "70%"
  },
  takeAways: {
    flexDirection: "row",
    fontFamily: "Helvetica-Bold",


  },
  address: {
    flexDirection: "row",
    marginTop: "3px"

  },
  Adetail: {
    flexDirection: "row",
    width: "205",
    marginTop: "3px"

  },
  name: {
    marginTop: "3px"
  },
  contact: {
    marginTop: "3px"
  },
  customerDetails: {
    fontFamily: "Helvetica-Bold",
  },
  instruction: {
    marginTop: "5px"
  },

  // table 

  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row"
  },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 10
  },


  mainTable: {
    marginTop: 10,
    marginRight: 35,

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
    height: 25,
    fontSize: 10,
  },
  cell: {
    flex: 1,
    textAlign: 'left',

    paddingLeft: 5,
  },
  lastCell: {
    flex: 1,
    textAlign: 'left',
    paddingLeft: 5,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginTop: "5px"
  },
  totalCount: {
    marginTop: "5px",
    fontFamily: "Helvetica-Bold"

  }

});

const PDFFile = () => {

  const data = [
    { id: 1, name: 'Item 1', quantity: 10, option: 'Option 1' },
    { id: 2, name: 'Item 2', quantity: 20, option: 'Option 2' },
    { id: 3, name: 'Item 3', quantity: 30, option: 'Option 3' },
  ];

  return (
    <Document>
      {/* pade1 */}

      <Page size="A4" style={styles.page}>
        <View style={styles.headerText}>

          <Text>16 June 2023</Text>
          <Text style={styles.right}>Order NO: 62763263236</Text>
        </View>
        <View style={styles.headerText}>
          <Image
            style={styles.image}
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Reliance_Jio_Logo_%28October_2015%29.svg/640px-Reliance_Jio_Logo_%28October_2015%29.svg.png"
            }
          />
          <Text style={styles.storeName}>NIO MART</Text>
        </View>


        <View style={styles.row_take}>
          <View style={styles.col1}>
            <View style={styles.takeAways}><Text>Take Away (16 JUNE 2025 - 11:11 AM)</Text></View>
            <View style={styles.address}><Text>Address</Text></View>
            <View style={styles.Adetail}><Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</Text></View>
          </View>
          <View style={styles.col2}>
            <View style={styles.customerDetails}><Text>Customer Details</Text></View>
            <View style={styles.name}><Text>Name</Text></View>
            <View style={styles.address}><Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</Text></View>
            <View style={styles.contact}><Text>9393939393</Text></View>
          </View>
        </View>

        <View style={styles.instruction}>
          <Text style={styles.customerDetails}>Take Away Instruction</Text>
          <Text style={styles.name}>It is a long established fact that a reader will be distracted by the</Text>
        </View>

        {/* table */}

        <View style={styles.mainTable}>
          <Text style={styles.totalCount}>Total Order Count :  {data.length}</Text>
          {/* Render the header row */}
          <Text style={styles.borderBottom}></Text>
          <View style={styles.headerRow}>
            <Text style={[styles.cell]}>Quantity</Text>
            <Text style={[styles.cell]}>Item</Text>
            <Text style={[styles.cell]}>Size</Text>
            <Text style={[styles.lastCell]}>Option</Text>
          </View>
          {/* Render the data rows */}
          {data.map((item) => (
            <View style={styles.rowData} key={item.id}>
              <Text style={[styles.cell]}>{item.id}</Text>
              <Text style={[styles.cell]}>{item.name}</Text>
              <Text style={[styles.cell]}>{item.quantity}</Text>
              <Text style={[styles.lastCell]}>{item.option}</Text>
            </View>
          ))}
        </View>













      </Page>


    </Document>
  );
};
export default PDFFile;
