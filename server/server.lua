RegisterServerEvent('hud:updateHUD')
AddEventHandler('hud:updateHUD', function(health, armor)
    TriggerClientEvent('hud:updateHUD', -1, health, armor)
end)
