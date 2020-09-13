
export const reducePlayer = player => {
    if(player.removed)
        return null

    let { id, first_name, last_name, fppg, played, position, salary, player_card_url, images, injured, injury_details, injury_status, fixture, team, news } = player;
    
    return {
        [id.replace('-', '')]: {
            id,
            first_name,
            last_name,
            fppg,
            played,
            position,
            salary,
            player_card_url,
            thumbnail: images.default,
            injury: injured ? { detail: injury_details, status: injury_status} : null,
            nextFixture: fixture._members[0],
            team: team._members[0],
            news_latest: news.latest,
        }
    }

}

export const reduceFixture = fixture => {
    let { id, away_team, home_team, sport, start_data, status } = fixture;
    
    return {
        [id]: {
            id,
            away_team: away_team.team._members[0],
            home_team: home_team.team._members[0],
            sport,
            start_data,
            status
        }
    }
}

export const reduceTeam = team => ({
    [team.id]: team
})


