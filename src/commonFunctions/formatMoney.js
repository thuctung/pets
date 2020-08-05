const formatUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
})

const formatVND = new Intl.NumberFormat('en-VN', {
    style: 'currency',
    currency: 'VND'
})

export const coverToUSD = money => {
    return formatUSD.format(money)
}

export const coverToVND = money => {
    const result = formatVND.format(money)
    return result.slice(1) + 'đ'
    return result
}