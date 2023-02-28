using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ControlaInimigo : MonoBehaviour
{
    public GameObject Jogador;
    public float velocidade = 5;

    // Start is called before the first frame update
    void Start()
    {
        Vector3 direcao = transform.position - Jogador.transform.position;
    }

    // Update is called once per frame
    void Update()
    {
        Vector3 direcao = Jogador.transform.position - transform.position;

        GetComponent<Rigidbody>().MovePosition(GetComponent<Rigidbody>().position + (direcao.normalized * velocidade * Time.deltaTime));
    }
}
