import { StyleSheet, Text, View } from 'react-native';
import Item from "./components/Item";
import React, {useState} from 'react'

export default function App() {
  console.log("App")

  const numbers = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"], [".", "0", "="]]
  const functionNumbers = ["C", "/", "*", "-", "+"]
  const [calcText, setCalcText] = useState("")
  const [result, setResult] = useState(null)

  const handleClick = (value) => {
      if(value == "C") setCalcText(calcText.slice(0, -1))
      else if (value == "=") {
        try {
          setResult(eval(calcText))
        }
        catch (error){
          setResult("error")
        }
      }
      else setCalcText(calcText + value)
  }
  return (
      <React.Fragment>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerText}>{calcText}</Text>
          </View>
          <View>
            <Text style={styles.headerText}>{result}</Text>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.left}>
            {numbers.map((e, index) =>
                <View style={styles.row} key={index}>
                    {e.map((el, i) => <Item value={el} key={i} onPress={() => handleClick(el)}/>)}
                </View>
            )}
          </View>
          <View style={styles.right}>
            {functionNumbers.map((e, index) => <Item value={e} key={index} color={"#656565"} onPress={() => handleClick(e)}/>)}
          </View>
        </View>
      </React.Fragment>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#47FFCB',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
  },
  headerText: {
    color: "black",
    fontSize: 24,
    padding: 36,
  },
  body: {
    flex: 2,
    backgroundColor: "#CCCCCC",
    flexDirection: "row",
  },
  left: {
    flex: 3,
    backgroundColor: "#111111",
    flexDirection: "column",
  },
  right: {
    flex: 1,
    backgroundColor: "blue",
  },
  row: {
    flexDirection: "row",
    flex: 1,
  }

});
