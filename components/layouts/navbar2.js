import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    Image,
    ModalContent,
    Lorem,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useColorMode,
    useBreakpointValue,
    useDisclosure,
    Spacer,
    HStack,
  } from "@chakra-ui/react";
  import {
    FiMenu,
    FiX,
    FiChevronDown,
    FiChevronRight,
    FiMoon,
    FiSun,
    FiSearch,
    FiMail,
  } from "react-icons/fi";
  import { FaDiscord } from "react-icons/fa";
  
  export default function WithSubNav2() {
    const { isOpen, onToggle, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <Box  zIndex="999" w="full">
        <Flex
          pos={'fixed'}
          zIndex="999"
          backdropFilter={"blur(5px)"}
          w="full"
          backdropSaturate={"180%"}
          bg={useColorModeValue(
            "rgba(248, 249, 253, 0.8)",
            "rgba(45, 55, 72, 0.7)"
          )}
          color={useColorModeValue("gray.600", "white")}
          minH={"70px"}
          py={{ base: "2px" }}
          px={"2%"}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={isOpen ? <FiX w={3} h={3} /> : <FiMenu w={5} h={5} />}
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
           <Link href='/'><Image src={"/logo.png"} h="52px" /></Link>
          <Flex
            flex={{ base: 1 }}
            justify={{ base: "left", md: "left" }}
            align={"left"}
          >
           
            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={2}
          >
           
            <Button  onClick={toggleColorMode} size="md" variant='ghost'>
              {colorMode === "light" ? <FiMoon /> : <FiSun /> }
            </Button>
           
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue("gray.600", "gray.200");
    const linkHoverColor = useColorModeValue("gray.800", "white");
    const popoverContentBgColor = useColorModeValue("white", "gray.800");
  
    return (
      <Stack direction={"row"} spacing={4}>
        {navlinks.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? "#"}
                  fontSize={"md"}
                  fontWeight={600}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Link>
              </PopoverTrigger>
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={"xl"}
                  minW={"sm"}
                >
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel, path, viewBox }, NavItem) => {
    return (
      <Link
        href={href}
        role={"group"}
        display={"block"}
        py={2}
        px={4}
        rounded={"md"}
        _hover={{ bg: useColorModeValue("#E3E2ED", "gray.900") }}
      >
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "#B12817" }}
              fontWeight={500}
            >
              {label}
            </Text>
            <Text fontSize={"sm"}>{subLabel}</Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"#B12817"} w={5} h={5} as={FiChevronRight} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue("white", "gray.800")}
        p={4}
        display={{ md: "none" }}
      >
        {navlinks.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }, NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? "#"}
          justify={"space-between"}
          align={"center"}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Text
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            {label}
          </Text>
          {children && (
            <Icon
              as={FiChevronDown}
              transition={"all .25s ease-in-out"}
              transform={isOpen ? "rotate(180deg)" : ""}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={"solid"}
            borderColor={useColorModeValue("gray.200", "gray.700")}
            align={"start"}
          >
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  const navlinks = [
    {
      label: "Ödüllerimiz",
      href: "/main",
    },
    {
      label: "Resim Galerisi",
      children: [
        {
          label: "Otonom Bakım",
          href: "#",
        },
        {
          label: "6 Sigma",
  
          href: "#",
        },
        {
          label: "Yönetim Sunum",
  
          href: "#",
        },
        {
          label: "Dış Ödüller",
  
          href: "#",
        },
        {
          label: "Ödül Törenleri",
  
          href: "#",
        },
        {
          label: "Eğitim",
          href: "#",
        },
      ],
    },
    {
      label: "Eğitim Dökümanları",
      href: "/",
    },
    {
      label: "Duyurular",
      href: "/",
    },
    {
      label: "Eğitim Talepleri",
      href: "/",
    },
    {
      label: "Kuşaklarımız",
      href: "/kusak",
    },
  ];
  