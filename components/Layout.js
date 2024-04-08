import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1C1C1C',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20,
    },
    content: {
      height: '60%',
      width: '90%',
      backgroundColor: '#2E2E2E',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 5,
      borderRadius: 4,
      gap: 10,
      margin: 0,
    },
    contentTitle: {
      textAlign: 'center',
      alignItems: 'center', 
      justifyContent: 'center',
      height: '10%',
      width: '100%',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 20,
      margin: 10,
      color: 'white',
    },
    ContentButton: {
      width: '80%',
      height: '15%',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
    },
    ContentButtonConvert: {
      width: '80%',
      height: '15%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Button: {
      width: '100%',
      height: 'auto',    
      borderWidth: 1,
      borderColor: '#2E64FE',
      padding: 5,
      borderRadius: 4,
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    },
    SelecText: {
      fontSize: 20,
      fontWeight: '300',
    },
    ContentList: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#7A7A78',
      borderRadius: 4,
      paddingHorizontal: 10,
    },
    search: {
      width: '100%',
      height: 'auto',
      backgroundColor: 'transparent',
      paddingHorizontal: 5,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: '#2E64FE',
      color: 'white',
    },
    List: {
      flex: 1,
    }, 
    Item: {
      backgroundColor: 'gray',
      marginBottom: 5,
      padding: 5,
    },
    ItemSelect : {
      width: '50%',
      textAlign: 'center',
      color: 'white',
    },
    data: {
      width: '100%',
      flexDirection: 'column',
    },
    contentRes: {
      backgroundColor: 'transparent',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      alignItems: 'center',
    },
    ButtonChange: {
      padding: 5,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: '#2E64FE',
      backgroundColor: '#2E64FE',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    },
    respuesta: {
      color: 'white',
      textAlign: 'left',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      fontSize: 15,
      width: '90%',
    }
  });

export default styles;