import { CircularProgress, Typography, Box } from '@mui/material'
import { useQuery } from 'react-query'

import { ConvertForm } from '../../app/features/ConvertForm'
import { currencyService } from '../../shared/api'
import { useState } from 'react'
import { convertCurrency } from '../../shared/util/convert/Currency'
import { mapCurrencyRateToLabelValue } from '../../app/entities/currency/lib/mapper'

export const CurrencyConverter = () => {

  const [converterResult, setConverterResult] = useState(null)

  const { isLoading, data: currencyRate } = useQuery({ queryKey: ['currencyRate'], queryFn: currencyService.getCurrency, select: (data) => data.data })

  const onSubmit = (data) => {
    const result = convertCurrency(data.countCurrency, currencyRate[data.currencyRateFrom], currencyRate[data.currencyRateTo])
    setConverterResult(`${data.countCurrency} ${data.currencyRateFrom} = ${result.toFixed(3)} ${data.currencyRateTo}`)
  }

  if (isLoading) {
    return (
      <CircularProgress />
    )
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h4">Currency converter</Typography>

      <Box sx={{ padding: "16px" }}>
        <ConvertForm currencyList={mapCurrencyRateToLabelValue(currencyRate)} onSubmit={onSubmit} buttonLabel="Convert"/>
      </Box>

      <Box sx={{ padding: "16px", minHeight: "64px" }} >
        <Typography>
          {converterResult !== null ? (
            converterResult
          ) : (
            "Please enter the amount and select currencies for conversion."
          )}
        </Typography>
      </Box>
    </Box>
  )
}
