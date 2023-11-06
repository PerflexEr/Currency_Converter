import { Box, Button , TextField  } from "@mui/material"
import { useForm } from "react-hook-form"
import { CurrencySelector } from "./currencySelector"

export const ConvertForm = ({currencyList,onSubmit,buttonLabel}) => {

  const {
    register,
    handleSubmit,
  } = useForm()


  return(
    <form onSubmit={handleSubmit(onSubmit)}  >
      <Box display='flex' flexDirection='column' gap={'20px'}>
        <TextField
        {...register('countCurrency')}
        label="Amount"
        type="number"
        required
        />
        <CurrencySelector register={{...register('currencyRateFrom')}} label='from' currencyList={currencyList}/>
        <CurrencySelector register={{...register('currencyRateTo')}} label='to' currencyList={currencyList}/>
        <Button sx={{ height: '50px' }} variant='contained' type='submit'>{buttonLabel}</Button>
      </Box>
    </form>
  )
}