import { Button, Circle, Flex, Heading, Image, Tag, Text, VStack } from "@chakra-ui/react";
import RatingInput from "./RatingInput";
import iconStar from "../../assets/icon-star.svg"
import illustrationThankYou from "../../assets/illustration-thank-you.svg"
import { useState } from "react";
import { Rating } from "../types";

type RatingPanelProps = {
    onSubmit?: (rating: Rating) => void
    submmited?: boolean
    rating?: Rating
}

export const RatingPanel = (props: RatingPanelProps) => {
    const [rating, setRating] = useState<Rating>(props.rating || undefined)
    const [submmited, setSubmmited] = useState<boolean>(props.submmited || false)

    const handleSubmit = () => {
        setSubmmited(rating !== undefined)
        props.onSubmit && props.onSubmit(rating)
    }


    return (
        <Flex 
            w={{ base: '90vw', md: '400px' }} 
            minH={'430px'}
            style={{
                borderRadius: '2rem',
                background: "radial-gradient(circle at center top, hsl(213, 19%, 18%) 20%, hsl(216, 12%, 8%) 120%)"
            }}
            bgGradient='radial(grey.medium 0%, blue.dark 100%)'
            p={{base:'1rem', md:'2rem'}}>
            {!submmited ? 
            <VStack justifyContent={'space-around'} alignItems={'left'}>
                <Circle size='2.75rem' bg='hsl(213, 19%, 18%)' color='white'>
                    <Image alt="rating_star" src={iconStar}></Image>
                </Circle>
                <VStack alignItems={'left'}>
                    <Heading fontSize={'1.75rem'} fontFamily={'Overpass'} fontWeight={800} color={'white'}>How did we do?</Heading>
                    <Text color={'grey.medium'} fontFamily={'Overpass'} fontWeight={400} fontSize={'15px'} overflow={'hidden'}>  Please let us know how we did with your support request. All feedback is appreciated
                        to help us improve our offering!</Text>
                </VStack>
                <RatingInput rating={rating} onChange={(rating) => { setRating(rating) }} />
                <Button w={'100%'}
                    h={'3rem'}
                    borderRadius={'2rem'}
                    bgColor={'primary'}
                    _hover={{ bgColor: 'white', color: 'primary' }}
                    onClick={handleSubmit}
                > SUBMIT</Button>
            </VStack> :
                <VStack justifyContent={'space-around'} alignItems={'center'}  >
                    <Image src={illustrationThankYou}></Image>
                    <Tag px={4} py={2} lineHeight={'1rem'} borderRadius={'2rem'} bgColor={'blue.dark'}><Text fontFamily={'Overpass'} fontWeight={800} color={'primary'}>You selected <b>{rating}</b> out of 5!</Text></Tag>
                    <VStack>

                        <Heading size={'lg'} fontFamily={'Overpass'} fontWeight={800}>Thank you!</Heading>
                        <Text textAlign={'center'} fontFamily={'Overpass'} fontWeight={400} fontSize={'15px'} color={'grey.medium'}>We appreciate you taking the time to give a rating. If you ever need more support,
                            don’t hesitate to get in touch!</Text>
                    </VStack>
                </VStack>
            }
        </Flex>
    );
};
