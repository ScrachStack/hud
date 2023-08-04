local health = 15000
local armor = 0

function updateHUD()
    local health = GetEntityHealth(PlayerPedId())
    local armor = GetPedArmour(PlayerPedId())
    
    SendNUIMessage({
        type = 'updateHUD',
        health = health,
        armor = armor,
    })
    SendNUIMessage({
        type = 'updateName',
        playerName = GetPlayerName(source),
    })
end

Citizen.CreateThread(function()
    while true do
        updateHUD()

        Citizen.Wait(1000) 
    end
end)
