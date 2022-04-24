import React from "react";
import { NativeBaseProvider, Center, HStack, Button, Text } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { increaseOne } from "../redux/actions";
import { decreaseOne } from "../redux/actions";
const Screen = () => {
   // Get states from store
   const { counter } = useSelector((state) => state.counter);
 
   // Define a dispatch to send actions
   const dispatch = useDispatch();
 
   return (
     <NativeBaseProvider>
       <Center flex={1}>
         <HStack space={20}>
           <Button borderRadius={0} width={70} 
             onPress={() => dispatch(increaseOne(counter))}
           >
             <Text fontSize={40} color={"white"}>+</Text>
           </Button>
           <Button borderRadius={0} width={70} 
             onPress={() => dispatch(decreaseOne(counter))}
           >
             <Text fontSize={40} color={"white"}>-</Text>
           </Button>
         </HStack>
         <Text fontSize={40} mt={20}>
           {counter}
         </Text>
       </Center>
     </NativeBaseProvider>
   );
 }

 export default Screen