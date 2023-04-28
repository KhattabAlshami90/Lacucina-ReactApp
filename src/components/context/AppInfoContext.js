import { createContext, useContext, useState } from "react";
import foods from "../../Data";
import developerData from "../../pages/develper/DeveloperInfo";
import { cupeImages } from "../../pages/develper/DeveloperInfo";

const AppInfoContext = createContext();
const AppInfo = () => {
  return useContext(AppInfoContext);
};
const AppInfoProvider = ({ children }) => {
  
  const serializedCart = localStorage.getItem("cart");
  let desrializizedCart = JSON.parse(serializedCart) ?? [];
  
  const [cartItems, setCartItems] = useState(desrializizedCart);
  const cartQuantity = cartItems.reduce(
    (qauntity,item) => item.qauntity + qauntity, 0
  )
  //foods
  const uniqueCategories = [
    "alla",
    ...new Set(foods.map(item => item.category))
  ];
  const [mealList, setMealList] = useState(foods);
  const [showFInfoText, setShowFInfoText] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [currentCupeImages, setCupeImages] = useState(cupeImages.main);
  const [fTextInfo, setFTextInfo] = useState({
    firstTitle: "",
    firstText: "",
    secondTitle: "",
    secondText: ""
  });

  const getTotalPrice = ()=>{
    let total=0;
    for(let i=0; i<cartItems.length; i++){
      total = total + getItemQuantity(cartItems[i].id) * foods[cartItems[i].id].price;
    }
    return total;
  }
  const getItemQuantity = (id) =>{
      return cartItems.find(item=>item.id === id)?.qauntity || 0
  }
  const increaseCartQuantity = (id)=>{
    setCartItems(currentItems => {
      if(currentItems.find(item=>item.id === id)==null){
        return[...currentItems,{id, qauntity:1}]
      }else {
        return currentItems.map(item => {
          if(item.id === id){
            return {...item, qauntity:item.qauntity + 1}
          } else  {
            return item
          }
        })
      }
    })
      let serializedCart = JSON.stringify(cartItems);
      localStorage.setItem("cart", serializedCart);

  }
  const decreaseCartQuantity = (id)=>{
    setCartItems(currentItems => {
      if(currentItems.find(item=>item.id === id)?.qauntity === 1){
        return currentItems.filter(item =>item.id !== id )
      }else {
        return currentItems.map(item => {
          if(item.id === id){
            return {...item, qauntity:item.qauntity - 1}
          } else  {
            return item
          }
        })
      }
    })
      let serializedCart = JSON.stringify(cartItems);
      localStorage.setItem("cart", serializedCart);
  }
  const removeFromCart = (id) =>{
    setCartItems(currentItems => {
      return currentItems.filter(item=>item.id!==id);
    })
      let serializedCart = JSON.stringify(cartItems);
      localStorage.setItem("cart", serializedCart);
  }




  const filterBySearch = searchText => {
    if (searchText === "") {
      setMealList(foods);
    } else {
      const filteredList = foods.filter(item =>
        item.title.includes(searchText)
      );
      setMealList(filteredList);
    }
  };

  const filterByCategory = category => {
    if (category === "alla") {
      setMealList(foods);
    } else {
      const filteredList = foods.filter(item => item.category === category);
      setMealList(filteredList);
    }
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  const resetMobileMenu = () => {
    setShowMobileMenu(false);
  };

  const setCupeMain = () => {
    setCupeImages(cupeImages.main);
  };
  const setCupeFrontEnd = () => {
    setCupeImages(cupeImages.frontEnd);
  };
  const setCupeDotNet = () => {
    setCupeImages(cupeImages.dotNet);
  };
  const setCupeOther = () => {
    setCupeImages(cupeImages.other);
  };

  const setFrontEndText = () => {
    setFTextInfo({
      firstTitle: developerData.frontEnd.firstTitle,
      firstText: developerData.frontEnd.firstText,
      secondTitle: developerData.frontEnd.secondTitle,
      secondText: developerData.frontEnd.secondtText
    });
  };
  const setDotNetText = () => {
    setFTextInfo({
      firstTitle: developerData.dotNet.firstTitle,
      firstText: developerData.dotNet.firstText,
      secondTitle: developerData.dotNet.secondTitle,
      secondText: developerData.dotNet.secondtText
    });
  };
  const setOtherText = () => {
    setFTextInfo({
      firstTitle: developerData.other.firstTitle,
      firstText: developerData.other.firstText,
      secondTitle: developerData.other.secondTitle,
      secondText: developerData.other.secondtText
    });
  };

  const handleSetShow = () => {
    setShowFInfoText(true);
  };
  const handleSetHide = () => {
    setShowFInfoText(false);
  };

  return (
    <AppInfoContext.Provider
      value={{
        getTotalPrice,
        cartItems,
        cartQuantity,
        removeFromCart,
        decreaseCartQuantity,
        increaseCartQuantity,
        getItemQuantity,
        uniqueCategories,
        filterBySearch,
        filterByCategory,
        mealList,
        setCupeOther,
        setCupeMain,
        setCupeDotNet,
        setCupeFrontEnd,
        currentCupeImages,
        showMobileMenu,
        toggleMobileMenu,
        resetMobileMenu,
        showFInfoText,
        handleSetShow,
        handleSetHide,
        fTextInfo,
        setFrontEndText,
        setDotNetText,
        setOtherText
      }}
    >
      {children}
    </AppInfoContext.Provider>
  );
};
export { AppInfo };
export default AppInfoProvider;
