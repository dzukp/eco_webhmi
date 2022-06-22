import xmlrpc.client


rpc_client = xmlrpc.client.ServerProxy('http://localhost:9876')


def tagsrv_status():
    statuses = rpc_client.get_tagsrv_modules_state()
    statuses.sort(key=lambda module: module['name'])
    return statuses
