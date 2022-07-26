import { Stack, useColorModeValue, Container, Card,Text,Flex,Image,Icon } from "@chakra-ui/react";

export default function Kusak() {
    const textColor = useColorModeValue("brands.900", "white");

    const textColorDate = useColorModeValue("secondaryGray.600", "white");
  return (
    <>
      <Stack bg={useColorModeValue("#F8F9FD", "gray.700")}>
      <Container maxW={{base:'6xl','2xl':'8xl'}} pt={{base:8,'2xl':24}} align='center'  >
     
      
       
        </Container>
      </Stack>
    </>
  );
}

const uzmanKara = [
    {name:'Erdal DENİZ',
     desc:'AR-GE ve Teknoloji Geliştirme Genel Müdür Yar.',
     img:'https://static.wixstatic.com/media/467790_926738c32c8241a983a674ab7bc70664~mv2.jpg'
    },
    {name:'Özlem YİĞİT ÇATAK',
    desc:'Aktarma Organları İş Birimi Genel Müdür Yar.',
    img:'https://static.wixstatic.com/media/467790_9c038851bfc645e1b5f08b27bc37dae6~mv2.jpg'
   }
]
