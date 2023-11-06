import { useCallback, useState } from "react"
import { useQuery } from "react-query"
import { Box, Button, CircularProgress, TextField, Typography } from "@mui/material"

import { ModalBase } from "../../shared/ui"
import { currencyService } from "../../shared/api"
import { useInputState } from "../../shared/util"
import { ConvertForm } from "../../app/features/ConvertForm"
import { mapCurrencyRateToLabelValue } from "../../app/entities/currency/lib/mapper"
import { useWishlistState } from "../../app/entities/wishes/lib"
import { WishListItems } from "../../app/entities/wishes/ui/wishList"

export const WishlistWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {value, setValue, error, setError} = useInputState()
  const { wishlist, saveItem } = useWishlistState()

  const { isLoading, data: currencyRate } = useQuery({ queryKey: ['currencyRate'], queryFn: currencyService.getCurrency, select: (data) => data.data })

  const onSubmit = useCallback((data) => {
    if(!value) {
      return setError(true)
    }

    saveItem({
      ...data,
      wishName: value
    })

    console.log(wishlist)
    return setIsOpen(false)
  })
  


  const onAddWishClick = () => {
    setIsOpen(true)
  }

  const onValueChange = (e) => {
    const targetValue = e.target.value

    if(targetValue) {
      setError(false)
    }
    
    return setValue(e.target.value)
  }

  if(isLoading) {
    return (
      <CircularProgress />
    )
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <Typography  variant="h4">Your Wish List</Typography>
      <Button variant="outlined" color="primary" onClick={onAddWishClick}>Add wish</Button>

      <Box padding="16px">
        <WishListItems currencyRate={currencyRate} items={wishlist}/>
      </Box>

      <ModalBase
        title="Describe your wish"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Box display="flex" flexDirection="column" alignItems="center" padding={2} gap={2}>
          <TextField
            label="Wish"
            type="text"
            value={value}
            autoComplete="off"
            onChange={onValueChange}
            error={error}
            helperText={error ? 'Обязательное поле' : ''}
          />
          <ConvertForm onSubmit={onSubmit} currencyList={mapCurrencyRateToLabelValue(currencyRate)} buttonLabel="Add" />
        </Box>
      </ModalBase>
    </Box>
  )
}