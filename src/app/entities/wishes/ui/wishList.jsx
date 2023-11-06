import { Box } from "@mui/material"

import { WishCard } from "./wishCard"
import { convertCurrency } from "../../../../shared/util/convert/Currency"

export const WishListItems = ({currencyRate, items }) => {
  return (
    <Box display="flex" justifyContent="flex-start"  flexWrap="wrap" gap={2}>
      
      {items && items.map((item, index) => {
        const result = convertCurrency(item.countCurrency, currencyRate[item.currencyRateFrom], currencyRate[item.currencyRateTo])
        return (
          <WishCard 
            key={`${index}-${item.from}-${item.countCurrency}`}
            title={item.wishName}
            initialPrice={`${item.countCurrency} ${item.currencyRateFrom}`}
            priceInfo={`${item.countCurrency} ${item.currencyRateFrom} = ${result.toFixed(3)} ${item.currencyRateTo}`} />
        )
      })}
    </Box>
  )
}