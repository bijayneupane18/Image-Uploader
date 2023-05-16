import styled from "styled-components";

export const UploadImage = styled.input.attrs({
    type: "file"
})`
`;

export const ImageView = styled.div`
    height: 15rem;
    width: 15rem;
    cursor: pointer;
    border: 1px solid black;

    .img{
        height: inherit;
        width: inherit;
    }
`;
 
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;