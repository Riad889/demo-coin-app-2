import { Heading, VStack, Text } from '@chakra-ui/react'
import React from 'react'

const ExchangeCard = ({ name, img, rank, url }) => {
    return (
        <>
            <a href={url} target='blank'>
                <VStack w={52} justifyContent={"center"} shadow={'lg'} p={'8'} borderEndRadius={'lg'} transition={"all 0.3s"} m={"4"}
                    css={{
                        "&:hover:": {
                            transform: "scale(1.1)"
                        }
                    }}
                >
                    <img src={img} alt="image" w={'10'} h={'10'} objectFit={'contain'} />
                    <Heading size={'md'} noOfLines={1}>{rank}</Heading>
                    <Text noOfLines={1}>
                        {name}
                    </Text>
                </VStack>

            </a>
        </>
    )
}

export default ExchangeCard