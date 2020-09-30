import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Logo from './assets/nubank.png'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import Font from 'react-native-vector-icons/FontAwesome5'
import Simple from 'react-native-vector-icons/SimpleLineIcons'

const App: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="#993399"/>
      <View style={styles.scrollView}>
        <View style={styles.header}>
          <Image source={Logo} style={styles.image}/>
          <Text style={styles.text}>Daniel</Text>
        </View>
        <Entypo name="chevron-small-down" color="white" size={24} style={styles.arrow}/>
        <ScrollView>
          <View style={styles.card}>
            <View style={styles.credit}>
              <Feather name="credit-card" color="#666" size={26}/>
              <Text style={styles.title}>Cartão de Crédito</Text>
            </View>
            <Text style={styles.countCredit}>Fatura Atual</Text>
            <Text style={styles.valueCredit}>R$ 160,00</Text>
            <Text style={styles.available}>Limite disponível <Text style={styles.valueAvailable}>R$ 40,00</Text></Text>
          </View>
          <View style={styles.card}>
            <View style={styles.credit}>
              <Font name="coins" color="#666" size={26}/>
              <Text style={styles.title}>Conta</Text>
            </View>
            <Text style={styles.balance}>Saldo disponível</Text>
            <Text style={styles.balanceAvailable}>R$ 5550,00</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.credit}>
              <View>
                <Simple name="present" color="#993399" size={26}/>
              </View>
              <Text style={styles.rewards}>Rewards</Text>
            </View>
            <Text style={styles.rewardsDescription}>Apague compras com pontos que {'\n'}nunca expiram.</Text>
            <TouchableOpacity onPress={() => console.log('oi')}>
              <View style={styles.buttonRewards}>
                <Text style={styles.textRewards}>CONHECER</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <ScrollView style={styles.footer} horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.footerItem}>
            <Entypo name="rocket" size={24} color="#fff" />
            <Text style={{ color: 'white'}}>Pix</Text>
          </View>
          <View style={styles.footerItem}>
            <Entypo name="rocket" size={24} color="#fff" />
            <Text style={{ color: 'white'}}>Pagar</Text>
          </View>
          <View style={styles.footerItem}>
            <Font name="coins" size={24} color="#fff" />
            <Text style={{ color: 'white'}}>Transferir</Text>
          </View>
          <View style={styles.footerItem}>
            <Font name="coins" size={24} color="#fff" />
            <Text style={{ color: 'white'}}>Depositar</Text>
          </View>
          <View style={styles.footerItem}>
            <Entypo name="rocket" size={24} color="#fff" />
            <Text style={{ color: 'white'}}>Indicar amigos</Text>
          </View>
          <View style={styles.footerItem}>
            <Feather name="credit-card" size={24} color="#fff" />
            <Text style={{ color: 'white'}}>Cartão{'\n'}virtual</Text>
          </View>
          <View style={styles.footerItem}>
            <Entypo name="rocket" size={24} color="#fff" />
            <Text style={{ color: 'white'}}>Recarga de{'\n'}celular</Text>
          </View>
          <View style={styles.footerItem}>
            <Entypo name="rocket" size={24} color="#fff" />
            <Text style={{ color: 'white'}}>Ajustar{'\n'}limite</Text>
          </View>
          <View style={styles.footerItem}>
            <Entypo name="rocket" size={24} color="#fff" />
            <Text style={{ color: 'white'}}>Bloquear{'\n'}cartão</Text>
          </View>
          <View style={styles.footerItem}>
            <Entypo name="rocket" size={24} color="#fff" />
            <Text style={{ color: 'white'}}>Cobrar</Text>
          </View>
          <View style={styles.footerItem}>
            <Entypo name="rocket" size={24} color="#fff" />
            <Text style={{ color: 'white'}}>Dividir{'\n'}valor</Text>
          </View>
          <View style={styles.footerItem}>
            <Entypo name="rocket" size={24} color="#fff" />
            <Text style={{ color: 'white'}}>Doação</Text>
          </View>
          <View style={[styles.footerItem, { marginRight: 0 }]}>
            <Entypo name="rocket" size={24} color="#fff" />
            <Text style={{ color: 'white'}}>Me ajuda</Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#993399',
    flex: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  image: {
    width: 56,
    height: 56,
    resizeMode: 'contain',
    tintColor: "white"
  },
  text: {
    color: 'white',
    marginLeft: 12,
    fontSize: 24,
    fontWeight: 'bold',
  },
  arrow: {
    alignSelf: 'center',
    marginBottom: 8,
  },
  card: {
    marginBottom: 16,
    backgroundColor: 'white',
    marginHorizontal: 16,
    borderRadius: 4,
    padding: 24,
  },
  credit: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginLeft: 24,
    color: '#666'
  },
  countCredit: {
    marginTop: 12,
    marginBottom: 8,
    fontSize: 14,
    color: '#666',
  },
  valueCredit: {
    fontSize: 28,
    color: 'rgb(52, 194, 224)',
    fontWeight: 'bold'
  },
  available: {
    fontSize: 16,
    color: '#666'
  },
  valueAvailable: {
    color: '#54b751',
    fontWeight: 'bold'
  },
  balance: {
    color: '#666',
    fontSize: 14,
    marginTop: 16,
    marginBottom: 16
  },
  balanceAvailable: {
    color: "#000",
    fontSize: 26,
    fontWeight: 'bold'
  },
  footer: {
    marginTop: 16,
    marginLeft: 16,
    height: 132,
    marginBottom: 16,
  },
  footerItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 4,
    width: 100,
    paddingLeft: 10,
    paddingVertical: 10,
    marginRight: 8,
    justifyContent: 'space-between',
  },
  rewards: {
    marginLeft: 24,
    fontSize: 24,
    fontWeight: "800",
    color: '#993399'
  },
  rewardsDescription: {
    marginVertical: 16,
    fontSize: 18,
    color: '#666'
  },
  buttonRewards: {
    borderColor: '#993399',
    borderWidth: 1,
    width: 120,
    borderRadius: 4,
  },
  textRewards: {
    color: '#993399',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 8,
  }
});

export default App;
