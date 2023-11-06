import { MenuItem, TextField } from '@mui/material'


export const CurrencySelector = ({ currencyList, label, register }) => {

  return (
    <TextField
      {...register}
      select
      label={label}
      sx={{ width: '100%' }}
      required
      defaultValue={currencyList[0].value}
      >
        {currencyList.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
    </TextField>
  )
}