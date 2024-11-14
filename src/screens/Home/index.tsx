import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Hellsing from "../../assets/Hellsing.jpg";
import Logo from "../../assets/PngItem_5076237.png";
import { styles } from './style';

export const Home = () => {

    
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.Logo} source={Logo}/>
            </View>
            
            <View style={styles.categoria}>
                <TouchableOpacity>
                    <Text style={styles.corText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.corText}>Tv Shows</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.corText}>Filmes</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.corText}>Kids</Text>
                </TouchableOpacity>

            </View>
                <TouchableOpacity style={styles.btnImage}>
                    <Image source={Hellsing} style={styles.imgOp}/>
                </TouchableOpacity>

            <View >
                <Text style={styles.titAssis}> Continue Assistindo</Text>
            </View>

            <View style={styles.containerAcao}>
            <ScrollView horizontal>
                <Image source={require("../../assets/Piratas.jpg")} style={styles.acao}/>
                
                <Image source={require("../../assets/Lotr.jpg")}style={styles.acao}/>
            </ScrollView>
            
            </View>

            <View>
                <Text> Area de aleatoria </Text>
            </View>


        </View>
        
    )
}