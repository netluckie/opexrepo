import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      pos={'relative'}
      bg={useColorModeValue(
        "gray.100",
        "rgba(26, 32, 44, 0.8)"
      )}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 2fr 2fr  " }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Image src="./logo2.png" />
            </Box>
            <Text fontSize={"sm"}>
              © 2022 HATTAT Holding. Tüm Hakları Saklıdır.
            </Text>
          </Stack>

          <Stack align={"flex-start"}>
            <Text fontWeight={"semibold"}>Adres Bilgileri</Text>
            <Text>
              Gazi Osman Paşa, Organize Sanayi Bölgesi, 4.Cad No:5, 59500 Gazi
              Osman Paşa Osb/Çerkezköy/Tekirdağ
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <Text fontWeight={"semibold"}>E-Mail Adresi</Text>
            <Link href={"mailto:operasyonelmukemmellik@hattat.com.tr"}>
              operasyonelmukemmellik@hattat.com.tr
            </Link>
            <Link href={"https://portal.hattat.com.tr"}>
              portal.hattat.com.tr
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
