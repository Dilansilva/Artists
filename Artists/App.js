
import * as React from 'react';
import { View ,StyleSheet,FlatList,Text} from 'react-native';
import { Searchbar } from 'react-native-paper';

const data = [
  { id: '1', title: 'First item' },
  { id: '2', title: 'Second item' },
  { id: '3', title: 'Third item' },
  { id: '4', title: 'Fourth item' }
];




 
const App = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);


  const [Artist,setArtist] = useState();//set Artist 

  var trackName = [];
  var collectionName = [];
  var artistName = [];


  function SearchArtist(){
    fetch('https://itunes.apple.com/search?term='+Artist+'&limit=25')
    .then((response) => response.json())
    .then((json) => {
      console.log(json.results[0].trackName);
      console.log(json.results[0].collectionName);
      console.log(json.results[0].artistName);
      for(var i = 0 ; i < 25 ; i++){
        trackName[i] = json.results[0].trackName;
        collectionName[i] = json.results[0].collectionName;
        artistName[i] = json.results[0].artistName;
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }


  return (
    <View style={StyleSheet.searchbar}>
    <Searchbar
      placeholder="Search Artist"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />

      <Text >Artists list</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View >
            <Text >{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default App;

const style=StyleSheet.create({

  searchbar:{
    marginTop:"20%",
  },
})
