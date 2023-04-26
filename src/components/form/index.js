import React, {useState} from "react"
import { View, Text, TextInput, Button } from "react-native"
import ResultImc from "./resultimc/index";

export default function Form(){
    
const [altura, setAltura] = useState(null)
const [peso, setPeso] = useState(null)
const [messageImc, setMessageImc] = useState("Preencha o peso e altura!")
const [imc, setImc] = useState(null)
const [textButton, setTextButton] = useState("CALCULAR IMC")

function imcCalculator(){
    return setImc((peso/(altura * altura).toFixed(2)))
}

function validacaoImc(){
    if(peso != null && altura != null){
        imcCalculator()
        setAltura(null)
        setPeso(null)
        setMessageImc("Seu IMC é igual: ")
        setTextButton("CALCULAR DENOVO")
        return
    }
    setImc(null)
    setTextButton("CALCULAR IMC")
    setMessageImc("Preencha o peso e altura!")
}



    return(
       <View>
        <View>
            <Text>Altura</Text>
            <TextInput onChangeText={setAltura} value={altura} placeholder="Ex: 1.80" keyboardType="numeric" >
            </TextInput>
            <Text>Peso</Text>
            <TextInput onChangeText={setPeso} value={peso} placeholder="Ex: 90.32" keyboardType="numeric" ></TextInput>
            <Button title={textButton} onPress={() => validacaoImc()}></Button>
        </View>
        <ResultImc messageResultImc={messageImc} resultImc={imc}></ResultImc>
       </View>
    );
}