import { Text,Container, Stack, Heading,Flex,Image,useColorModeValue,Icon,SimpleGrid,VStack,Link,Box, Spacer,Button} from "@chakra-ui/react"
import {AiOutlineBulb , AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {ImBooks} from 'react-icons/im'
import {TbChartDonut3, TbRotateClockwise2} from 'react-icons/tb'
import {GiAutoRepair, GiGearHammer, GiHammerBreak} from 'react-icons/gi'
import {FaNetworkWired} from 'react-icons/fa'
export default function Landin2(){

    return(
      <VStack  bg={useColorModeValue("#F8F9FD", "gray.700")}>
          
          <Container maxW={{base:'6xl','2xl':'8xl'}} pt={{base:4,'2xl':14}}  >
           <Stack
           align={'center'}
           spacing={{base:8,md:10}}
           py={{base:20,md:28}}
           direction={{base:'column',md:'row'}} //Mobil ve Masaüstü için yerleştirme
           backgroundImage='./dots.png' backgroundRepeat={'no-repeat'} backgroundPosition='bottom left' backgroundSize={'164px'}
           >
            <Stack flex={1}  spacing={{base:5,md:10}} >
                
            <Heading lineHeight={1.1} fontWeight={'semibold'} fontSize={{base:'3xl',sm:'4xl',lg:'6xl'}}>
                    <Text 
                    color={'#016C69'} >Operasyonel Mükemmellik</Text> Yönetim Sistemi
                </Heading>
            </Stack>
            <Flex flex={1} justify={'flex-end'} w={'full'}>
                <Image alt={'Hero'} fit={'cover'} align={'center'} w={'100%'} h={'100%'} src={'./Hero.png'} />
            </Flex>
           </Stack>
           <Stack align={'center'} justify='center' w='full' py={4} >
            <Image alt={'Brand'} fit={'cover'} align={'center'} w={'lg'} src={'./brand.png'} />
            </Stack>
 

     
            <SimpleGrid columns={{base:3,lg:3,'2xl':4}} spacingX={6} spacingY={12} py={20}  >
        {subMenus.map((menu,index)=>(
          <VStack key={index}  bg={useColorModeValue("white", "gray.700")} borderRadius={24} w={{base:'xs','2xl':'xs'}}  h={{base:'xs','2xl':'sm'}} p={{base:8}} align={'center'} sx={{shadow:useColorModeValue('0 8px 43px 0 rgb(3 54 61 / 9%) !important','  rgba(0, 0, 0, 0.4) 0px 15px 40px !important')}} >
            <Box>
            <Flex align={'center'} justifyContent='center' w='full'>
                <Image src={menu.Img} maxW={48}  maxH={48}/>
            </Flex>   
            <Text fontSize={'2xl'} pt={4} fontWeight={'600'}>{menu.Title}</Text>

           </Box>
           <Spacer/>
           <Box w='full'  align='right'>
           <Link 
           style={{ textDecoration: 'none' }}
           zIndex='1'
           href="/projeler  "
           ><Button  w='full' color={menu.color}> Daha Fazla</Button></Link>
           </Box>
          </VStack>
        ))}
      </SimpleGrid>
   
        </Container>
    </VStack>
    )
}

const subMenus =[
  {
    Img:'./project.png',
    Icon:AiOutlineFundProjectionScreen,
    color:'#016C69',
    Title:'Projeler',
    IconColor:'white',
    Desc:'Detay Bankası ve Proje Sorgulama adımlarını bu kısımdan yapabilirsiniz.',
  },
  {
    Img:'./personel.jpg',
    Icon:AiOutlineBulb,
    color:'#F3AA66',
    IconColor:'white',
    Title:'Bireysel Fikirler',
    Desc:'Detay Bankası ve ilgili işlem adımlarını bu kısımdan yapabilirsiniz.',
 
  },
  {
    Img:'./kaizen.jpg',
    Icon:ImBooks,
    color:'#016C69',
    IconColor:'white',
    Title:'TNE Ö/S Kaizenler',
    Desc:'TNE, Ö/S Kaizen, Poke Yoke ve daha fazlasını bu kısımdan yapabilirsin.',

  },
  {
    Img:'./spc.png',
    Icon:TbRotateClockwise2,
    color:'#F3AA66',
    IconColor:'black',
    Title:'SPC Değerlendirme',
    Desc:'SPC, SPC Konsolları ve Yeteneksiz Noktalar hakkında işlemleri bu kısımdan yapabilirsin.',

  },
  {
    Img:'./5sbg.png',
    Icon:TbChartDonut3,
    color:'#016C69',
    IconColor:'black',
    Title:'5S Çalışmaları', 
     Desc:'Aktarma Organları, Hidrolik İş Ünit. ,Otomativ, Traktör ve Diğer Departman ile ilgili işlemleri bu kısımdan yapabilirsin.',
   
  },
  {
    Img:'./hüs.png',
    Icon:GiGearHammer,
    color:'#F3AA66',
    IconColor:'white',
    Title:'Hema Üretim Sistemi',
    Desc:'Dökümanlar, Denetim Puanı ve Planı adımlarını bu kısımdan yapabilirsiniz.',
  
  },
  {
    Img:'/prosedur.jpg',
    Icon:FaNetworkWired,
    color:'#016C69',
    IconColor:'white',
    Title:'Prosedürler',
    Desc:'Prosedüler, Talimatlar, Değerlendirme Tabloları ve Ödül Tablolarına bu kısımdan ulaşabilirsiniz.',

  },
  {
    Img:'/otonombakım.jpg',
    Icon:GiAutoRepair,
    color:'#F3AA66',
    IconColor:'white',
    Title:'Otonom Bakım',
    Path:'#',
    Desc:'Eğitim Talebi adımlarına bu kısımdan ulaşabilirsiniz.',

    
  },

]



