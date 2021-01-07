import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },

  title: {
    flex: 1,
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    fontFamily: 'helvetica, monospace,sans',
    fontSize: 24,
    fontWeight: '700',
  },
  display: {
    flex: 1,
    minHeight: '5%',
    minWidth: '100%',
    color: 'white',
    fontSize: 38,
    marginBottom: 50,
    fontWeight: '600',
    textAlign: 'right',
    flexDirection: 'row',
    textAlignVertical: 'center',
  },
  btncontainer: {
    flex: 9,
    flexDirection: 'column',
    marginTop: 80,
  },

  btnflex: {
    flex: 0,
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
  },
  btns: {
    minWidth: 100,
    minHeight: 100,
    backgroundColor: '#2853ff',
  },
  text: {
    color: 'white',
    fontSize: 28,
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontWeight: '600',
  },
});

const App = () => {
  const [num, setNum] = useState(['', '', '']);
  const [operator, setOperator] = useState(['', '']);

  const addnum = (number) => {
    let newArr = [...num];
    if (operator[0] === '') {
      if (num[2].length) {
        newArr[0] = number.toString();
        newArr[1] = '';
        newArr[2] = '';
      } else newArr[0] === '0' ? (newArr[0] = number) : (newArr[0] += number);
    } else {
      newArr[1] === '0' ? (newArr[1] = number) : (newArr[1] += number);
    }
    setNum(newArr);
  };

  const addop = (op, show = op) => {
    setOperator([op, show]);
  };

  const showres = () => {
    let newArr = ['', '', ''];
    newArr[2] = eval(`${num[0]}${operator[0]}${num[1]}`).toString();
    setNum(newArr);
    setOperator(['', '']);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>__________</Text>

      <Text style={styles.display}>
        {num[0] + operator[1] + num[1] + num[2]}
      </Text>

      <View style={styles.btncontainer}>
        <View style={styles.btnflex}>
          <View style={styles.btn}>
            <TouchableOpacity style={styles.btns} onPress={() => addnum(1)}>
              <Text style={styles.text}>1</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity style={styles.btns} onPress={() => addnum(2)}>
              <Text style={styles.text}>2</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity style={styles.btns} onPress={() => addnum(3)}>
              <Text style={styles.text}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity
              style={styles.btns}
              onPress={() => {
                let tmp = [...num];
                if (num[1].length) {
                  console.log('yes', tmp[1]);
                  tmp[1] = num[1].slice(0, num[1].length - 1);
                  setNum(tmp);
                } else if (operator[0].length) {
                  setOperator(['', '']);
                } else {
                  tmp[0] = num[0].slice(0, num[0].length - 1);
                  setNum(tmp);
                }
              }}
              onLongPress={() => {
                setNum(['', '', '']);
                setOperator(['', '']);
              }}>
              <Text style={styles.text}>C</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.btnflex}>
          <View style={styles.btn}>
            <TouchableOpacity style={styles.btns} onPress={() => addnum(4)}>
              <Text style={styles.text}>4</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity style={styles.btns} onPress={() => addnum(5)}>
              <Text style={styles.text}>5</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity style={styles.btns} onPress={() => addnum(6)}>
              <Text style={styles.text}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity
              style={styles.btns}
              onPress={() => addop('**', '^')}>
              <Text style={styles.text}>^</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.btnflex}>
          <View style={styles.btn}>
            <TouchableOpacity style={styles.btns} onPress={() => addnum(7)}>
              <Text style={styles.text}>7</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity style={styles.btns} onPress={() => addnum(8)}>
              <Text style={styles.text}>8</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity style={styles.btns} onPress={() => addnum(9)}>
              <Text style={styles.text}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity style={styles.btns} onPress={() => addop('%')}>
              <Text style={styles.text}>%</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.btnflex}>
          <View style={styles.btn}>
            <TouchableOpacity style={styles.btns} onPress={() => addnum(0)}>
              <Text style={styles.text}>0</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity style={styles.btns} onPress={() => addop('+')}>
              <Text style={styles.text}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity style={styles.btns} onPress={() => addop('-')}>
              <Text style={styles.text}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity
              style={styles.btns}
              onPress={() => addnum('2.71828182')}>
              <Text style={styles.text}>e</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.btnflex}>
          <View style={styles.btn}>
            <TouchableOpacity style={styles.btns} onPress={() => addop('*')}>
              <Text style={styles.text}>x</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity style={styles.btns} onPress={() => addop('/')}>
              <Text style={styles.text}>/</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity style={styles.btns} onPress={() => addnum('.')}>
              <Text style={styles.text}>.</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity style={styles.btns} onPress={() => showres()}>
              <Text style={styles.text}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default App;
