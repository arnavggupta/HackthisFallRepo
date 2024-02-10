// store.js
import {create} from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const store = (set) => ({
  user_id:'',
  setUserId:(id)=>{
    set(()=>({
      user_id : id,
    }))
  },
  setUserName:(name)=>{
    set(()=>({
      user_name : name,
    }))
  },
  setUserAvatar:(avatar)=>{
    set(()=>({
      user_avatar : avatar,
    }))
  },
});

const useStore = create(devtools(persist(store, {
  name: "store",
})));
 
export default useStore;
