import {
  Text,
  Container,
  Stack,
  Heading,
  Flex,
  Image,
  useColorModeValue,
  Icon,
  SimpleGrid,
  VStack,
  Link,
  Box,
  Spacer,
  Button,
  HStack,
  Avatar,
} from "@chakra-ui/react";
import { AiOutlineBulb, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { ImBooks } from "react-icons/im";
import { TbChartDonut3, TbRotateClockwise2 } from "react-icons/tb";
import { GiAutoRepair, GiGearHammer, GiHammerBreak } from "react-icons/gi";
import { FaNetworkWired } from "react-icons/fa";
import { useState } from "react";
export default function Landin2() {
  const [hero, setHero] = useState("./Hero.png");
  const [color, setColor] = useState("#016C69");

  const setRed = () => {
    setColor("#B22817");
    setHero("./Herored.png");
  };

  return (
    <VStack bg={useColorModeValue("#F8F9FD", "gray.700")}>
      <Container
        maxW={{ base: "6xl", "2xl": "8xl" }}
        pt={{ base: 4, "2xl": 14 }}
      >
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 12, md: 28 }}
          direction={{ base: "column", md: "row" }} //Mobil ve Masaüstü için yerleştirme
          backgroundImage="./dots.png"
          backgroundRepeat={"no-repeat"}
          backgroundPosition="bottom left"
          backgroundSize={"164px"}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={"semibold"}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            >
              <Text fontSize={"7xl"} color={color}>
                Hattat Holding{" "}
              </Text>{" "}
              Operasyonel Mükemmellik <Text fontSize={"xl"}></Text>
            </Heading>
          </Stack>
          <Flex flex={1} justify={"flex-end"} w={"full"}>
            <Image
              alt={"Hero"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={hero}
              onClick={setRed}
            />
          </Flex>
        </Stack>
        <Stack align={"center"} justify="center" w="full" py={4}>
          <Image
            alt={"Hero"}
            fit={"cover"}
            align={"center"}
            w={"lg"}
            src={"./Brand.png"}
          />
        </Stack>

        <SimpleGrid
          columns={{ base: 3, lg: 3, "2xl": 4 }}
          spacingX={6}
          spacingY={12}
          py={20}
        >
          {subMenus.map((menu, index) => (
            <VStack
            transition={"all .3s ease"}
          transform={"translateY(16px)"}
       
          _hover={{ opacity: "100%", transform: "translateX(0)" }}
              key={index}
              bg={useColorModeValue("white", "gray.700")}
              borderRadius={16}
              w={{ base: "xs", "2xl": "xs" }}
              h={{ base: "xs", "2xl": "xs" }}
              p={{ base: 8 }}
              align={"flex-start"}
              sx={{
                shadow: useColorModeValue(
                  "0 8px 43px 0 rgb(3 54 61 / 9%) !important",
                  "  rgba(0, 0, 0, 0.4) 0px 15px 32px !important"
                ),
              }}
            >
              <Box>
                <Flex align={"flex-start"} w="full">
                  <Icon
                    as={menu.Icon}
                    color={menu.color ? menu.color : color}
                    fontSize={42}
                  />
                </Flex>
                <Text fontSize={"2xl"} pt={4} fontWeight={"600"}>
                  {menu.Title}
                </Text>
                <Text fontWeight={"450"} pt={2} color={"gray.400"}>
                  {" "}
                  {menu.Desc}
                </Text>
              </Box>
              <Spacer />
              <Box w="full" align="right">
                <Link
                  style={{ textDecoration: "none" }}
                  zIndex="1"
                  href="/projeler  "
                >
                  <Button w="full" color={menu.color ? menu.color : color}>
                    {" "}
                    Daha Fazla
                  </Button>
                </Link>
              </Box>
            </VStack>
          ))}
        </SimpleGrid>

      </Container>

    </VStack>
  );
}

const subMenus = [
  {
    Img: "./project.png",
    Icon: AiOutlineFundProjectionScreen,
    Title: "Projeler",
    Desc: "Detay Bankası ve Proje Sorgulama adımlarını bu kısımdan yapabilirsiniz.",
  },
  {
    Img: "./personel.jpg",
    Icon: AiOutlineBulb,
    color: "black.400", 
    Title: "Bireysel Fikirler",
    Desc: "Detay Bankası ve ilgili işlem adımlarını bu kısımdan yapabilirsiniz.",
  },
  {
    Img: "./kaizen.jpg",
    Icon: ImBooks,
    Title: "TNE Ö/S Kaizenler",
    Desc: "TNE, Ö/S Kaizen, Poke Yoke ve daha fazlasını bu kısımdan yapabilirsin.",
  },
  {
    Img: "./spc.png",
    Icon: TbRotateClockwise2,
    color: "black.400",
    Title: "SPC Değerlendirme",
    Desc: "SPC, SPC Konsolları ve Yeteneksiz Noktalar hakkında işlemleri bu kısımdan yapabilirsin.",
  },
  {
    Img: "./5sbg.png",
    Icon: TbChartDonut3,
    Title: "5S Çalışmaları",
    Desc: "Aktarma Organları, Hidrolik İş Ünit. ,Otomativ, Traktör ve Diğer Departman ile ilgili işlemleri bu kısımdan yapabilirsin.",
  },
  {
    Img: "./hüs.png",
    Icon: GiGearHammer,
    color: "black.400",
    Title: "Hema Üretim Sistemi",
    Desc: "Dökümanlar, Denetim Puanı ve Planı adımlarını bu kısımdan yapabilirsiniz.",
  },
  {
    Img: "/prosedur.jpg",
    Icon: FaNetworkWired,
    Title: "Prosedürler",
    Desc: "Prosedüler, Talimatlar, Değerlendirme Tabloları ve Ödül Tablolarına bu kısımdan ulaşabilirsiniz.",
  },
  {
    Img: "/otonombakım.jpg",
    Icon: GiAutoRepair,
    color: "black.400",
    Title: "Otonom Bakım",
    Path: "#",
    Desc: "Eğitim Talebi adımlarına bu kısımdan ulaşabilirsiniz.",
  },
];
