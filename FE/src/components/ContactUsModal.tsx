import { useState } from 'react'
import {
  Modal,
  Box,
  Typography,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel
} from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import ContactUsImg from '../assets/ContactUs.png'
import CloseIcon from '../assets/CancelIcon.svg'

const ContactUsModal = ({open,handleClose}:any) => {
  const [serviceType, setServiceType] = useState('')
  const [selectedDate, setSelectedDate] = useState<any>(null)

  const handleDateChange = (newDate: any) => {
    setSelectedDate(newDate)
  }

  const handleServiceTypeChange = (event: any) => {
    setServiceType(event.target.value)
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: '#050505',
          border: '2px solid #000',
          boxShadow: 24,
          width: {
            xs: '100%', 
            sm: '100%', 
            md: '70%', 
            lg: '70%', 
            xl: '1159px' 
          },
          height: '670px',
          overflowY: 'auto',
     
          p: 4
        }}
      >
        <div className='flex justify-between'>
          <div></div>
          <p className='text-2xl md:text-[36px] font-bold leading-[38.42px] md:leading-[57.64px] font-hind text-[#FFFFFF] text-center'>
            Contact Us
          </p>
          <img src={CloseIcon} alt='CloseIcon' className='cursor-pointer w-[38px] h-[41px]' onClick={handleClose}/>
        </div>

        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column', 
              lg: 'row' 
            },
            gap: 2,
          }}
        >
          <Box
            sx={{
              flex: 1,
              maxWidth: {
                xs: 'full', 
                lg: '570px' 
              },
              color: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              gap: 2,

              // height:'1069px'
            }}
          >
            <div>
              <p className='p text-base-md:2.5 leading-[25.62px] md:text-2xl font-bold leading-[38.42px] font-hind'>
                Full Name <span className='text-[#D71918]'>*</span>
              </p>
              <TextField className='bg-[#DBDBDB] w-[100%] rounded-[10px]' />
            </div>
            <div>
              <p className='p-2.5 text-base md:text-2xl font-bold leading-[25.62px] md:leading-[38.42px] font-hind'>
                Email Id <span className='text-[#D71918]'>*</span>
              </p>
              <TextField className='bg-[#DBDBDB] w-full rounded-[10px]' />
            </div>
            <div>
              <p className='p-2.5 text-base md:text-2xl font-bold leading-[25.62px] md:leading-[38.42px] font-hind'>
                Phone no. <span className='text-[#D71918]'>*</span>
              </p>
              <TextField className='bg-[#DBDBDB] w-full rounded-[10px]' />
            </div>
            <div>
              <p className='p-2.5 text-base md:text-2xl font-bold leading-[25.62px] md:leading-[38.42px] font-hind'>
                Service Type <span className='text-[#D71918]'>*</span>
              </p>
              <FormControl fullWidth className="bg-[#DBDBDB] rounded-[10px]">
  <Select
    value={serviceType}
    onChange={handleServiceTypeChange}
    displayEmpty
  >
    <MenuItem
      value=""
      disabled
      sx={{
        fontWeight: "300",
        fontSize: {
          xs: 20,
          sm: 20,
          md: 24
        },
        lineHeight: "38.42px",
        fontFamily: "'Hind', sans-serif",
      }}
      className='text-[20px]'
    >
      Select
    </MenuItem>
    <MenuItem
      value="Photography"
      sx={{
        "&:hover": {
          backgroundColor: "#D71918",
          color: "white",
        },
        "&.Mui-selected": {
          backgroundColor: "#D71918 !important", // Ensure the selected background color is consistent
          color: "white",
        },
        fontWeight: "bold",
        fontSize: {
          xs: 20,
          sm: 20,
          md: 24
        },
        lineHeight: "38.42px",
        fontFamily: "'Hind', sans-serif",
      }}
    >
      Photography
    </MenuItem>
    <MenuItem
      value="Videography"
      sx={{
        "&:hover": {
          backgroundColor: "#D71918",
          color: "white",
        },
        "&.Mui-selected": {
          backgroundColor: "#D71918 !important",
          color: "white",
        },
        fontWeight: "bold",
        fontSize: {
          xs: 20,
          sm: 20,
          md: 24
        },
        lineHeight: "38.42px",
        fontFamily: "'Hind', sans-serif",
      }}
    >
      Videography
    </MenuItem>
    <MenuItem
      value="Graphics & Animation"
      sx={{
        "&:hover": {
          backgroundColor: "#D71918",
          color: "white",
        },
        "&.Mui-selected": {
          backgroundColor: "#D71918 !important",
          color: "white",
        },
        fontWeight: "bold",
        fontSize: {
          xs: 20,
          sm: 20,
          md: 24
        },
        lineHeight: "38.42px",
        fontFamily: "'Hind', sans-serif",
      }}
    >
      Graphics & Animation
    </MenuItem>
    <MenuItem
      value="Brand Advertising"
      sx={{
        "&:hover": {
          backgroundColor: "#D71918",
          color: "white",
        },
        "&.Mui-selected": {
          backgroundColor: "#D71918 !important",
          color: "white",
        },
        fontWeight: "bold",
        fontSize: {
          xs: 20,
          sm: 20,
          md: 24
        },
        lineHeight: "38.42px",
        fontFamily: "'Hind', sans-serif",
      }}
    >
      Brand Advertising
    </MenuItem>
  </Select>
</FormControl>



            </div>
            <div>
              <p className='p-2.5 text-base md:text-2xl font-bold leading-[25.62px] md:leading-[38.42px] font-hind'>
                Date <span className='text-[  ]'>*</span>
              </p>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  className='bg-[#DBDBDB] w-full rounded-[10px]'
                  value={selectedDate}
                  disablePast
                  onChange={handleDateChange}
                />
              </LocalizationProvider>
            </div>
            <div>
              <p className='p-2.5 text-base md:text-2xl font-bold leading-[25.62px] md:leading-[38.42px] font-hind'>
                Message <span className='text-[#D71918]'>*</span>
              </p>
              <TextField
                multiline
                rows={6}
                className='bg-[#DBDBDB] w-full rounded-[10px]'
                variant='outlined'
              />
            </div>

            <button className='mt-[10px] rounded-[10px] pt-2.5 pb-2.5 text-[20px] md:text-[32px] leading-[32px] md:leading-[51.23px] font-hind font-bold bg-[#D71918]'>
              Send
            </button>
          </Box>

          <Box
            sx={{
              flex: 1,
              display: {
                xs: 'none', // Hide on extra-small screens
                lg: 'block', // Show on large screens
              },
              margin:'auto',

            }}
          >
            <img
              src={ContactUsImg}
              alt='ContactUsImg'
              style={{ maxWidth: '100%', height: '860px' }}
            />
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}

export default ContactUsModal
