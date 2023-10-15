import { Circle, HStack } from "@chakra-ui/react";
import { useId } from "react"
import { Rating } from "../types";

type RatingInputProps = {
    onChange?: (rating: Rating) => void
    rating?: Rating
}

const RatingInput = (props: RatingInputProps) => {
    const ratingId = useId()

    const handleRatingChange = (rating: number) => {
        props.onChange && props.onChange(rating);
    };

    return (
        <HStack justifyContent={"space-between"}>
            {
                [1, 2, 3, 4, 5].map(r => {
                    return (
                        <Circle size={'3rem'}
                            bgColor={props.rating === r ? 'grey.medium' : 'blue.dark'}
                            key={ratingId + r}
                            onClick={() => { handleRatingChange(r) }}
                            _hover={{ bgColor: 'primary', color: 'white' }}
                            color={props.rating === r ? 'white' : 'grey.ligth'}
                            fontFamily={'Overpass'} fontWeight={800}
                            textAlign="center"
                            cursor={'pointer'}
                        ><p>{r}</p></Circle>
                    )
                })
            }
        </HStack>
    )
}

export default RatingInput