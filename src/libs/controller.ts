import {addDoc, collection, deleteDoc, doc, getFirestore, setDoc} from 'firebase/firestore'
import {app} from './firebase'
import { storage} from './firebase'

import {ref,uploadBytes, uploadBytesResumable} from 'firebase/storage'
import { getApp } from 'firebase/app'
import { v4 } from 'uuid'
export const firestore = getFirestore(app)
const fireBaseApp = getApp()
// Hotels Collection
const storageRef = ref(storage,'gs://hotels-management-app.appspot.com')

export const hotelsCollection = collection(firestore,'hotels')
//add hotels data 
// edit feature 
export const NewHotels = async(hotelsData:any)=>{
    const newHotels= await addDoc(hotelsCollection,{...hotelsData})
console.log('The hotels was created')
}
export const updateHotels = async(id:string | undefined,docData:any) =>{

        const getHotels = doc(firestore,`hotels/${id}`)
        await setDoc(getHotels,docData,{merge:true})
        console.log('value has sucessfully updated')
 
}
export const deleteHotels = async(id:string|undefined ) =>{
    const deleteHotels = doc(firestore,`hotels/${id}`)
    await deleteDoc(deleteHotels)
    console.log('the data have been sucessfuly deleted')
}
export const aploadFireBase = async(file:File) =>{
    const Imageref = ref(storage,`images/${file.name+v4()}`)
    uploadBytes(Imageref,file).then(()=>{
        alert('image sucessfully aploaded')
    })
}   