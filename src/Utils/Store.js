import { create } from "zustand";
import Firestore from "./firebase";
import { toast } from 'react-toastify';
const {readDoc} = Firestore
const photos = [{title:'Dummy',file:'',path:'https://picsum.photos/id/1001/200/200'},
{title:'Dummy',file:'',path:'https://picsum.photos/id/1002/200/200'},
{title:'Dummy',file:'',path:'https://picsum.photos/id/1003/200/200'},
{title:'Dummy',file:'',path:'https://picsum.photos/id/1004/200/200'},
{title:'Dummy',file:'',path:'https://picsum.photos/id/1005/200/200'},

];
const useStore = create((set, get) => ({
  items: photos,
  placeholders:photos,
  loading:false,
  state: {
    title: "",
    file: null,
    path: null,
    user:null
  },
  isCollapsed: false,
  setItems: (item) => {
    const state = get().items;
    set(() => ({
      items: [item, ...state],
      placeholders:[item, ...state]
    }))
    toast.success('Item added successfully!')
  },
  setLoading: (loading) => set({ loading }),
  setItem: async() => {
    try {
      const items=await readDoc('stock')
      console.log(items,'the itemsss')
      set(() => ({
        items: items,
        placeholders:items
      }));
    } catch (error) {
      toast.error('Error reading document:',error)
    }
    
    
  },
  filterItems: (input) =>{
  // const items=get().items
  const placeholders=get().placeholders
  if (input === "" || !!input) {
    set(() => ({
      items:placeholders
    }));
  }
  let list = placeholders.flat();
    let results = list.filter((item) => {
      const name = item.title.toLowerCase();
      const searchInput = input.toLowerCase();
      return name.indexOf(searchInput) > -1;
    });
    set(() => ({
      items:results
    }))},
  handleInputChange: (name, value, files) => {
    const state = get().state;
    if (name === "file") {
      if (files && files.length > 0) {
        const file = files[0];
        set(() => ({
          state: { ...state, file: file, path: URL.createObjectURL(file) },
        }));
      } else {
        // Reset file and path if no file is selected
        set(() => ({
          state: { ...state, file: null, path: null },
        }));
      }
    } else {
      // Update title state
      set(() => ({
        state: { ...state, [name]: value },
      }));
    }
  },
  setIscollapse: (val) => {
    set(() => ({
      isCollapsed: val,
      state: {
        title: "",
        file: null,
        path: null,
      },
    }));
    
  },
}));

export default useStore;
