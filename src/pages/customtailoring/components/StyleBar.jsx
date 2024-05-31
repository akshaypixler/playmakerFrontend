import {
  Container,
  Box,
  Text,
  Flex,
  Stack
} from "@chakra-ui/react";

// Component imports
import StyleOptionCard from "./StyleOptionCard";
import { wrap } from "framer-motion";

// Image imports
import sleeves from "../../../assets/images/icons/sleeves.png";
import shirt1 from "../../../assets/images/icons/shirt1.png";
import pocket from "../../../assets/images/icons/pocket.png";

// Icon imports
import {
  CheckCircleIcon
} from "@chakra-ui/icons";

// Hooks import
import { useState } from "react";

const StyleBar = ({ sleevesType, setSleevesType, collarType, setCollarType, cuffType, setCuffType, chestPocketType, setChestPocketType }) => {

  return (
    <Box width={"100%"} bg={"primaryLight"} padding={"2rem"}>
      <Box>
        <Text fontSize={"1.3rem"} color={"secondary"}>Collar</Text>
        <Flex direction={"row"} wrap={"wrap"} columnGap={"1rem"} rowGap={"1rem"}>
          <Box 
            width={"6rem"} 
            padding={"1rem"} 
            onClick={e => {
              const data = {
                id: "collar001", 
                collarName: "New kent", 
                isSelected: true, 
                price : 0
              };
              setCollarType(data);
              }}>
            <Box width={"1rem"} height={"1rem"}>
              {(collarType.id === "collar001" && collarType.isSelected) ? <CheckCircleIcon color={"green"} marginBottom={"0rem"} fontSize={"0.8rem"} lineHeight={"0rem"} /> : ""}
            </Box>
            <StyleOptionCard imgWidth="3.4rem" />
          </Box>

          <Box width={"6rem"} padding={"1rem"} onClick={e => setCollarType(v => ({ id: "collar002", collarName: "Kent collar", isSelected: true, price : 0 }))}>
            <Box width={"1rem"} height={"1rem"}>
              {(collarType.id === "collar002" && collarType.isSelected) ? <CheckCircleIcon color={"green"} marginBottom={"0rem"} fontSize={"0.8rem"} lineHeight={"0rem"} /> : ""}
            </Box>
            <StyleOptionCard imgWidth="3.4rem" text="Kent Collar" />
          </Box>

          <Box width={"6rem"} padding={"1rem"} onClick={e => setCollarType(v => ({ id: "collar003", collarName: "Button down", isSelected: true, price : 0 }))}>
            <Box width={"1rem"} height={"1rem"}>
              {(collarType.id === "collar003" && collarType.isSelected) ? <CheckCircleIcon color={"green"} marginBottom={"0rem"} fontSize={"0.8rem"} lineHeight={"0rem"} /> : ""}
            </Box>
            <StyleOptionCard imgWidth="3.4rem" text="Button down" />
          </Box>

          <Box width={"6rem"} padding={"1rem"} onClick={e => setCollarType(v => ({ id: "collar004", collarName: "Stand-up collar", isSelected: true, price : 0 }))}>
            <Box width={"1rem"} height={"1rem"}>
              {(collarType.id === "collar004" && collarType.isSelected) ? <CheckCircleIcon color={"green"} marginBottom={"0rem"} fontSize={"0.8rem"} lineHeight={"0rem"} /> : ""}
            </Box>
            <StyleOptionCard imgWidth="3.4rem" text="Stand-up collar" />
          </Box>

          <Box width={"6rem"} padding={"1rem"} onClick={e => setCollarType(v => ({ id: "collar005", collarName: "Wing collar", isSelected: true, price : 0 }))}>
            <Box width={"1rem"} height={"1rem"}>
              {(collarType.id === "collar005" && collarType.isSelected) ? <CheckCircleIcon color={"green"} marginBottom={"0rem"} fontSize={"0.8rem"} lineHeight={"0rem"} /> : ""}
            </Box>
            <StyleOptionCard imgWidth="3.4rem" text="Wing collar" />
          </Box>

          <Box width={"6rem"} padding={"1rem"} onClick={e => setCollarType(v => ({ id: "collar006", collarName: "Rounded collar", isSelected: true, price : 0 }))}>
            <Box width={"1rem"} height={"1rem"}>
              {(collarType.id === "collar006" && collarType.isSelected) ? <CheckCircleIcon color={"green"} marginBottom={"0rem"} fontSize={"0.8rem"} lineHeight={"0rem"} /> : ""}
            </Box>
            <StyleOptionCard imgWidth="3.4rem" text="Rounded collar" />
          </Box>

        </Flex>
      </Box>

      {sleevesType.id === "sleeve001" ? <Box marginTop={"3rem"}>
        <Text fontSize={"1.3rem"} color={"secondary"}>Cuffs</Text>
        <Flex direction={"row"} wrap={"wrap"} columnGap={"1rem"} rowGap={"1rem"}>

          <Box width={"6rem"} padding={"1rem"} onClick={e => setCuffType(v => ({ id: "cuff001", cuffName: "Single cuff 1 button", isSelected: true, price : 0 }))}>
            <Box width={"1rem"} height={"1rem"}>
              {(cuffType.id === "cuff001" && cuffType.isSelected) ? <CheckCircleIcon color={"green"} marginBottom={"0rem"} fontSize={"0.8rem"} lineHeight={"0rem"} /> : ""}
            </Box>
            <StyleOptionCard img={sleeves} imgWidth="3.4rem" text="Single cuff 1 button" />
          </Box>

          <Box width={"6rem"} padding={"1rem"} onClick={e => setCuffType(v => ({ id: "cuff002", cuffName: "Single cuff 2 button", isSelected: true, price : 0 }))}>
            <Box width={"1rem"} height={"1rem"}>
              {(cuffType.id === "cuff002" && cuffType.isSelected) ? <CheckCircleIcon color={"green"} marginBottom={"0rem"} fontSize={"0.8rem"} lineHeight={"0rem"} /> : ""}
            </Box>
            <StyleOptionCard img={sleeves} imgWidth="3.4rem" text="Single cuff 2 buttons" />
          </Box>

          <Box width={"6rem"} padding={"1rem"} onClick={e => setCuffType(v => ({ id: "cuff003", cuffName: "Rounded 1 button", isSelected: true, price : 0 }))}>
            <Box width={"1rem"} height={"1rem"}>
              {(cuffType.id === "cuff003" && cuffType.isSelected) ? <CheckCircleIcon color={"green"} marginBottom={"0rem"} fontSize={"0.8rem"} lineHeight={"0rem"} /> : ""}
            </Box>
            <StyleOptionCard img={sleeves} imgWidth="3.4rem" text="Rounded 1 button" />
          </Box>

          <Box width={"6rem"} padding={"1rem"} onClick={e => setCuffType(v => ({ id: "cuff004", cuffName: "Double squared", isSelected: true, price : 0 }))}>
            <Box width={"1rem"} height={"1rem"}>
              {(cuffType.id === "cuff004" && cuffType.isSelected) ? <CheckCircleIcon color={"green"} marginBottom={"0rem"} fontSize={"0.8rem"} lineHeight={"0rem"} /> : ""}
            </Box>
            <StyleOptionCard img={sleeves} imgWidth="3.4rem" text="Double squared" />
          </Box>

        </Flex>
      </Box> : ""}

      <Box marginTop={"3rem"}>
        <Text fontSize={"1.3rem"} color={"secondary"}>Sleeves</Text>
        <Flex direction={"row"} wrap={"wrap"} columnGap={"1rem"} rowGap={"1rem"}>
          <Box width={"6rem"} padding={"1rem"} onClick={e => setSleevesType(v => ({ id: "sleeve001", sleeveName: "Long", isSelected: true, price : 0 }))}>
            <Box width={"1rem"} height={"1rem"}>
              {(sleevesType.id === "sleeve001" && collarType.isSelected) ? <CheckCircleIcon color={"green"} marginBottom={"0rem"} fontSize={"0.8rem"} lineHeight={"0rem"} /> : ""}
            </Box>
            <StyleOptionCard img={shirt1} imgWidth="3.4rem" text="Long" />
          </Box>

          <Box width={"6rem"} padding={"1rem"} onClick={e => setSleevesType(v => ({ id: "sleeve002", sleeveName: "Short", isSelected: true, price : 0 }))}>
            <Box width={"1rem"} height={"1rem"}>
              {(sleevesType.id === "sleeve002" && sleevesType.isSelected) ? <CheckCircleIcon color={"green"} marginBottom={"0rem"} fontSize={"0.8rem"} lineHeight={"0rem"} /> : ""}
            </Box>
            <StyleOptionCard img={shirt1} imgWidth="3.4rem" text="Short" />
          </Box>

        </Flex>
      </Box>

      <Box marginTop={"3rem"}>
        <Text fontSize={"1.3rem"} color={"secondary"}>Chestpocket</Text>
        <Flex direction={"row"} wrap={"wrap"} columnGap={"1rem"} rowGap={"1rem"}>
          <Box width={"6rem"} padding={"1rem"} onClick={e => setChestPocketType(v => ({ id: "chestpocket001", chestPocketName: "No pocket", isSelected: true, price : 0 }))}>
            <Box width={"1rem"} height={"1rem"}>
              {(chestPocketType.id === "chestpocket001" && collarType.isSelected) ? <CheckCircleIcon color={"green"} marginBottom={"0rem"} fontSize={"0.8rem"} lineHeight={"0rem"} /> : ""}
            </Box>
            <StyleOptionCard img={pocket} imgWidth="3.4rem" text="No pocket" />
          </Box>

          <Box width={"6rem"} padding={"1rem"} onClick={e => setChestPocketType(v => ({ id: "chestpocket002", chestPocketName: "Pocket", isSelected: true, price : 0 }))}>
            <Box width={"1rem"} height={"1rem"}>
              {(chestPocketType.id === "chestpocket002" && sleevesType.isSelected) ? <CheckCircleIcon color={"green"} marginBottom={"0rem"} fontSize={"0.8rem"} lineHeight={"0rem"} /> : ""}
            </Box>
            <StyleOptionCard img={pocket} imgWidth="3.4rem" text="Pocket" />
          </Box>

        </Flex>
      </Box>

    </Box>
  );
};

export default StyleBar;