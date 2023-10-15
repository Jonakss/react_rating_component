import { Button, Circle, Flex, Heading, Image, Tag, Text, VStack } from "@chakra-ui/react";
import RatingInput from "./RatingInput";
import iconStar from "../../assets/icon-star.svg"
import illustrationThankYou from "../../assets/illustration-thank-you.svg"
import { useState } from "react";
import { Rating } from "../types";

type RatingPanelProps = {
    onSubmit?: (rating: Rating) => void
}

export const RatingPanel = (props: RatingPanelProps) => {
    const [rating, setRating] = useState<Rating>(undefined)
    const [submmited, setSubmmited] = useState<boolean>(false)

    const handleSubmit = () => {
        setSubmmited(rating !== undefined)
        props.onSubmit && props.onSubmit(rating)
    }


    return (
        <Flex w={'430px'} style={{
            borderRadius: '1rem',
            background: "radial-gradient(circle at center top, hsl(213, 19%, 18%) 20%, hsl(216, 12%, 8%) 110%)"
        }}
            bgGradient='radial(grey.medium 0%, blue.dark 100%)' p={'2rem'}>
            {!submmited ? <VStack alignItems={'left'} gap={8} >
                <Circle size='3rem' bg='hsl(213, 19%, 18%)' color='white'>
                    <Image src={iconStar}></Image>
                </Circle>
                <VStack alignItems={'left'}>
                    <Heading fontFamily={'Overpass'} fontWeight={800}>How did we do?</Heading>
                    <Text color={'grey.medium'} fontFamily={'Overpass'} fontWeight={400} size={'15px'}>  Please let us know how we did with your support request. All feedback is appreciated
                        to help us improve our offering!</Text>
                </VStack>
                <RatingInput rating={rating} onChange={(rating) => { setRating(rating) }} />
                <Button w={'100%'}
                    borderRadius={'2rem'}
                    bgColor={'primary'}
                    _hover={{ bgColor: 'white', color: 'primary' }}
                    onClick={handleSubmit}
                > Submit</Button>
            </VStack> :
                <VStack alignItems={'center'} gap={8} >
                    <Image src={illustrationThankYou}></Image>
                    <Tag px={4} py={2} lineHeight={'1rem'} borderRadius={'2rem'} bgColor={'blue.dark'}><Text fontFamily={'Overpass'} fontWeight={800} color={'primary'}>You selected <b>{rating}</b> out of 5!</Text></Tag>
                    <VStack>

                        <Heading size={'lg'} fontFamily={'Overpass'} fontWeight={800}>Thank you!</Heading>
                        <Text textAlign={'center'} fontFamily={'Overpass'} fontWeight={400} color={'grey.medium'}>We appreciate you taking the time to give a rating. If you ever need more support,
                            don’t hesitate to get in touch!</Text>
                    </VStack>
                </VStack>
            }
        </Flex>
    );
};
