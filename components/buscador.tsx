// import styled from "styled-components";
import * as React from "react";
import fetch from 'isomorphic-unfetch';
import styled from "styled-components";

interface BuscadorProps {
    handleChange: any,
    searchTitle: any,
    onKeyDown: any;
}


export const Buscador: React.FunctionComponent<BuscadorProps> = ({
    /* eslint-disable react/prop-types */
    children,
    handleChange,
    searchTitle,
    onKeyDown,
    /* eslint-enable react/prop-types */
    ...otherProps
}) => {

    return (
		<Header>
            <input onKeyDown={onKeyDown} placeholder={'Digite um nome de Filme'} type="text" onChange={handleChange} />
            <button onClick={searchTitle}><img src='data:image/png;base64,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' /></button>

	    </Header>
    );
};




export default Buscador;


const Header = styled.header`
    background: rgb(153, 102, 255);
    width:100%;
    display:flex;
    flex-flow: row;
    height: 58px;
    align-items: center;
    padding: 0 12px;
    justify-content: center;
    *{
            box-sizing: border-box;
    }
    input{
         width: 80%;
        max-width: 485px;
        height: 75%;
        border-radius: 4px 0px 0px 4px;
        border: none;
        background: rgba(255, 255, 255, 0.79);
        font-size: 15px;
        padding-left: 24px;
        font-weight:500;
        &::placeholder {
         color:  rgba(0, 0, 0, 0.7);
        }
        &:focus{
               background: #fff;
               outline:none;
        }
    }


    button{
        width: 20%;
         max-width: 70px;
        height: 75%;
        background: #ffffff;
        border-radius: 0 4px 4px 0;
        border: none;
        border-left: solid 1px #e6e6e6;
        img{
            width:24px;
        }
        &:focus{
              
               outline:none;
        }
    }

`;