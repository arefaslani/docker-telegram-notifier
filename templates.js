module.exports.container_start = e =>
`Started container <b>${e.Actor.Attributes.name}</b>
Image: <b>${e.Actor.Attributes.image}</b>
Container ID: <b>${e.Actor.ID}</b>`;

module.exports.container_kill = e =>
`Stopped container <b>${e.Actor.Attributes.name}</b>
Image: <b>${e.Actor.Attributes.image}</b>
Exit Code: <b>${e.Actor.Attributes.exitCode}</b>
Container ID: <b>${e.Actor.ID}</b>`;

module.exports.container_die = module.exports.container_kill;

module.exports.container_destroy = e =>
`Destroyed container <b>${e.Actor.Attributes.name}</b>
Image: <b>${e.Actor.Attributes.image}</b>
Container ID: <b>${e.Actor.ID}</b>`;

module.exports.network_create = e =>
`Created network \`${e.Actor.Attributes.name}\``;

module.exports.network_destroy = e =>
`Destroyed network \`${e.Actor.Attributes.name}\``;
