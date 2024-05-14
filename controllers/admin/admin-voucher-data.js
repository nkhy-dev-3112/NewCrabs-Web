const admin_voucher_data = {}

admin_voucher_data.data = [
    {
        id: 'VOUCHER1',
        description: 'Campaign',
        status: 'ACTIVE',
        value: "120000 VND",
        start: '12/5/2024',
        end: '12/6/2024',
        usage: '87%',
        isPercentage: false
    },
    {
        id: 'VOUCHER2',
        description: 'Marketing',
        status: 'SCHEDULED',
        value: "120000 VND",
        start: '12/6/2024',
        end: '12/67/2024',
        usage: '0%',
        isPercentage: false
    },
    {
        id: 'VOUCHER3',
        description: 'Monthly',
        status: 'EXPIRED',
        value: "12 %",
        start: '12/4/2024',
        end: '12/5/2024',
        usage: '99%',
        isPercentage: true
    }
]
module.exports = admin_voucher_data