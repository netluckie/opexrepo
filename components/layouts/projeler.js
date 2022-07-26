import {
  Text,
  Container,
  Stack,
  Heading,
  Flex,
  Image,
  Button,
  useColorModeValue,
  VStack,
  Tabs, TabList, TabPanels, Tab, TabPanel, SimpleGrid, Box, Spacer
} from "@chakra-ui/react";
import BackButton from "../utils/backbutton";

export default function Project() {
  return (
    <VStack bg={useColorModeValue("#F8F9FD", "gray.700")}>
      <Container maxW={{ base: "6xl", "2xl": "8xl" }} pt={12}>
        <Stack
          align={"center"}
          spacing={{ base: 40, md: 24 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
          //Mobil ve Masaüstü için yerleştirme
        >
          <Stack flex={1} spacing={{ base: 5, md: 6 }}>
            <BackButton />
            <Heading
              lineHeight={1.1}
              fontWeight={"semibold"}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl", "2xl": "6xl" }}
            >
              <Text color={"#016C69"}>Hattat Proje</Text> Yönetim Sistemi
            </Heading>
            <Text maxW={"lg"} color="gray.500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              bibendum, est eu ultrices cursus, neque enim porttitor orci, id
              iaculis mi diam facilisis sapien. Nunc dolor neque, rhoncus a
              sodales vel, feugiat ac libero. Vestibulum varius, nisi sit amet
              facilisis interdum, nulla elit tristique ex, eu facilisis metus
              velit quis tortor.
            </Text>
            <Button size={"lg"} bg="#016C69" maxW="2xs" color="white">
              Dökümanları Oku
            </Button>
          </Stack>
          <Flex flex={1} justify={"center"} w={"full"}>
            <Image
              alt={"Hero"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={"./projectHero.png"}
            />
          </Flex>
        </Stack>
        <Stack align={"center"} justify="center" w="full">
        <Tabs variant='soft-rounded' colorScheme='teal' py={12}>
        <TabList>
          <Tab>Detay Bankası</Tab>
          <Tab>Porjeni Sorgula</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
          Panel 1
          </TabPanel>
          <TabPanel>
          Panel 2
          </TabPanel>
        </TabPanels>
      </Tabs>
        </Stack>
    
      </Container>
    </VStack>
  );
}


const projects=[
  {
    Title:'Tanım Fazı',
    type:'PDF'
  },
  {
    Title:'Tanım Fazı_Süreç Yönetimi Temel',
    type:'PDF'
  },
  {
    Title:'Tanım Fazı _Yalın Altı Sigma Organizasyonu',
    type:'PDF'
  },
  {
    Title:'Tanım Fazı _Yalın Yönetim Temel Kavramlar',
    type:'PDF'
  },
  {
    Title:'6 Sigma Sarı Kuşak Eğitim Notu',
    type:'PTTX'
  },
  {
    Title:'5S Eğitim Notu',
    type:'PTTX'
  }


]
