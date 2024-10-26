import {collection, doc, getDocs, serverTimestamp, setDoc} from 'firebase/firestore'
import  { db } from '../lib/firebase.config'



const Firestore={
    writeDoc:(...args)=>{
        const [inputs]=args
        return new Promise(resolve=>{
            const randomIndex = Math.floor(Math.random() * 100000000)
            try {
                const docRef = doc(db,'stocks',`${randomIndex}`)
                setDoc(docRef, {
                    title:inputs.title,path:inputs.path, createdAt: serverTimestamp(),user:inputs.user
                })
                resolve('new Doc successfully uploaded')
            } catch (error) {
                
            }
        })
    },
    readDoc:(...args)=>{
        let docs=[]
        const ref =collection(db,'stocks')
        return new Promise(async resolve=>{
            try {
                const snapshots=await getDocs(ref)
                snapshots.forEach(doc =>{
                    const d = {...doc.data(),id:doc.id}
                    docs.push(d)
                })
                resolve(docs)
            } catch (error) {
                console.log(error)
            }
        })
    }
}

export default Firestore