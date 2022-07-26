import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/router";
import { IconButton } from "@chakra-ui/react";

export default function BackButton(){
    const router = useRouter();
    return(
        <IconButton
        icon={<BiArrowBack />}
        w="0"
        onClick={() => router.back()}
      />
    )
}