import React, { Fragment } from 'react'
import vg from "../assets/2.webp"
import { VStack ,Image} from '@chakra-ui/react'


const Home = () => {
    return (
        <Fragment>
            <VStack>
                <Image src={"https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} height={"100vh"} width={"100%"} fit={"cover"} alt={"image"}>

                </Image>
                <Image src={"https://images.pexels.com/photos/843700/pexels-photo-843700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} height={"100vh"} width={"100%"} fit={"cover"} alt={"image"}>

                </Image>
                <Image src={"https://images.pexels.com/photos/2068664/pexels-photo-2068664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} height={"100vh"} width={"100%"} fit={"cover"} alt={"image"}>

                </Image>

            </VStack>

        </Fragment>
    )
}

export default Home