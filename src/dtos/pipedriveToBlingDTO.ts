
function dto(deal: any) {
    return `
    <?xml version="1.0" encoding="UTF-8"?>
    <pedido>
        <cliente>
            <nome>${deal.person_name}-${deal.org_name}</nome>
            <fone>${deal.person_id.phone.find(p => p.primary).value}</fone>
            <email>${deal.person_id.email.find(e => e.primary).value}</email>
        </cliente>
        <itens>
            <item>
                <codigo>${deal.id}</codigo>
                <descricao>Pipedrive Deal</descricao>
                <qtde>1</qtde>
                <vlr_unit>${deal.value}</vlr_unit>
            </item>
        </itens>
        <obs>7 Deal creator ${deal.creator_user_id.name}</obs>
    </pedido>
`
}

export { dto }