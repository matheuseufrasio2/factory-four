import axios from 'axios';
import { useState } from 'react';
import { ResponseProps } from '../components/Card';
import { apiNames } from '../types/endpoints';

export function useApiNames() {
  const [accounts, setAccounts] = useState({});
  const [assets, setAssets] = useState({});
  const [customers, setCustomers] = useState({});
  const [datapoints, setDatapoints] = useState({});
  const [devices, setDevices] = useState({});
  const [documents, setDocuments] = useState({});
  const [forms, setForms] = useState({});
  const [invites, setInvites] = useState({});
  const [media, setMedia] = useState({});
  const [messages, setMessages] = useState({});
  const [namespaces, setNamespaces] = useState({});
  const [orders, setOrders] = useState({});
  const [patients, setPatients] = useState({});
  const [relationships, setRelationships] = useState({});
  const [rules, setRules] = useState({});
  const [templates, setTemplates] = useState({});
  const [users, setUsers] = useState({});
  const [workflows, setWorkflows] = useState({});

  function callEndPoints() {
    // accounts
    axios
      .get<ResponseProps>(`https://api.factoryfour.com/${apiNames.accounts}/health/status`)
      .then((res) => setAccounts(res.data))
      .catch(() => setAccounts({ success: false, message: 'error' }));

    // assets
    axios
      .get<ResponseProps>(`https://api.factoryfour.com/${apiNames.assets}/health/status`)
      .then((res) => setAssets(res.data))
      .catch(() => setAssets({ success: false, message: 'error' }));

    // customers
    axios
      .get<ResponseProps>(`https://api.factoryfour.com/${apiNames.customers}/health/status`)
      .then((res) => setCustomers(res.data))
      .catch(() => setCustomers({ success: false, message: 'error' }));

    // datapoints
    axios
      .get<ResponseProps>(`https://api.factoryfour.com/${apiNames.datapoints}/health/status`)
      .then((res) => setDatapoints(res.data))
      .catch(() => setDatapoints({ success: false, message: 'error' }));

    // devices
    axios
      .get<ResponseProps>(`https://api.factoryfour.com/${apiNames.devices}/health/status`)
      .then((res) => setDevices(res.data))
      .catch(() => setDevices({ success: false, message: 'error' }));

    // documents
    axios
      .get<ResponseProps>(`https://api.factoryfour.com/${apiNames.documents}/health/status`)
      .then((res) => setDocuments(res.data))
      .catch(() => setDocuments({ success: false, message: 'error' }));

    // forms
    axios
      .get<ResponseProps>(`https://api.factoryfour.com/${apiNames.forms}/health/status`)
      .then((res) => setForms(res.data))
      .catch(() => setForms({ success: false, message: 'error' }));

    // invites
    axios
      .get<ResponseProps>(`https://api.factoryfour.com/${apiNames.invites}/health/status`)
      .then((res) => setInvites(res.data))
      .catch(() => setInvites({ success: false, message: 'error' }));

    // media
    axios
      .get<ResponseProps>(`https://api.factoryfour.com/${apiNames.media}/health/status`)
      .then((res) => setMedia(res.data))
      .catch(() => setMedia({ success: false, message: 'error' }));

    // messages
    axios
      .get<ResponseProps>(`https://api.factoryfour.com/${apiNames.messages}/health/status`)
      .then((res) => setMessages(res.data))
      .catch(() => setMessages({ success: false, message: 'error' }));

    // namespaces
    axios
      .get<ResponseProps>(`https://api.factoryfour.com/${apiNames.namespaces}/health/status`)
      .then((res) => setNamespaces(res.data))
      .catch(() => setNamespaces({ success: false, message: 'error' }));

    // orders
    axios
      .get<ResponseProps>(`https://api.factoryfour.com/${apiNames.orders}/health/status`)
      .then((res) => setOrders(res.data))
      .catch(() => setOrders({ success: false, message: 'error' }));

    // patients
    axios
      .get<ResponseProps>(`https://api.factoryfour.com/${apiNames.patients}/health/status`)
      .then((res) => setPatients(res.data))
      .catch(() => setPatients({ success: false, message: 'error' }));

    // relationships
    axios
      .get<ResponseProps>(`https://api.factoryfour.com/${apiNames.relationships}/health/status`)
      .then((res) => setRelationships(res.data))
      .catch(() => setRelationships({ success: false, message: 'error' }));

    // rules
    axios
      .get<ResponseProps>(`https://api.factoryfour.com/${apiNames.rules}/health/status`)
      .then((res) => setRules(res.data))
      .catch(() => setRules({ success: false, message: 'error' }));

    // templates
    axios
      .get<ResponseProps>(`https://api.factoryfour.com/${apiNames.templates}/health/status`)
      .then((res) => setTemplates(res.data))
      .catch(() => setTemplates({ success: false, message: 'error' }));

    // users
    axios
      .get<ResponseProps>(`https://api.factoryfour.com/${apiNames.users}/health/status`)
      .then((res) => setUsers(res.data))
      .catch(() => setUsers({ success: false, message: 'error' }));

    // workflows
    axios
      .get<ResponseProps>(`https://api.factoryfour.com/${apiNames.workflows}/health/status`)
      .then((res) => setWorkflows(res.data))
      .catch(() => setWorkflows({ success: false, message: 'error' }));
  }

  return {
    callEndPoints,
    accounts,
    assets,
    customers,
    datapoints,
    devices,
    documents,
    forms,
    invites,
    media,
    messages,
    namespaces,
    orders,
    patients,
    relationships,
    rules,
    templates,
    users,
    workflows,
  };
}
