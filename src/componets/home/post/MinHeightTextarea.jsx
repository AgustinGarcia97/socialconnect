import * as React from 'react';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import '../../../assets/Fonts/Tisa/Tisa.css'
export default function MinHeightTextarea() {
    const blue = {
        100: '#DAECFF',
        200: '#b6daff',
        400: '#3399FF',
        500: '#007FFF',
        600: '#0072E5',
        900: '#4d175e',
    };

    const grey = {
        50: '#F3F6F9',
        100: '#E5EAF2',
        200: '#DAE2ED',
        300: '#C7D0DD',
        400: '#B0B8C4',
        500: '#9DA8B7',
        600: '#6B7A90',
        700: '#434D5B',
        800: '#303740',
        900: '#1C2025',
    };

    const Textarea = styled(BaseTextareaAutosize)(
        ({ theme }) => `
    box-sizing: border-box;
    font-family: Tisa Sans Pro Regular ;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[300]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : grey[900]};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[700]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[70]};
    resize:none;
    &:hover {
      border-color: ${blue[900]};
    }

  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
    );

    return (
        <Textarea sx={{width:{xs:'90%',md:'95%'} }} aria-label="minimum height" minRows={3} placeholder="I'm gonna say..." />
    );
}
