import React from "react";
import { extratoLista } from "../../info";

import { Box, Button } from "../UI";
import Items from "../Items";

const Extrato = () => {
    return (
        <Box>{extratoLista.updates.map(({ id, type, from, value, date }) => {
            return (
                <Items key={id} type={type} from={from} value={value} date={date}/>
            );
        })
        }
        <Button>Ver mais</Button>
        </Box>
    )
}

export default Extrato;