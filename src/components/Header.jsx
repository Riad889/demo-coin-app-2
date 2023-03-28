import React from 'react'
import { Link } from "react-router-dom";
import { Button, HStack, VStack } from '@chakra-ui/react'

function Header() {
  return (
    <HStack p={4} shadow={'base'} bgColor={'transperant'} justifyContent={"center"} gap={"6"} borderRadius={"1rem"} position={"static"}>
      <Button variant={"Outline"} color={"black"}>
        <Link to="/">Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"black"}>
        <Link to="/coins">Coins</Link>
      </Button>
      <Button variant={"unstyled"} color={"black"}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>

    </HStack>
  )
}

export default Header